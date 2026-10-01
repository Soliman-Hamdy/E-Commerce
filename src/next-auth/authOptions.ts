import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "myLogin",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials) {
        const response = await fetch(`${process.env.API}auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const payload = await response.json();
        const userdata: { id: string } = jwtDecode(payload.token);
        // user obj , token => access token
        console.log("payload...", payload);
        console.log("mytoken...", userdata);

        return {
          id: userdata.id,
          email: payload.user.email,
          name: payload.user.name,
          token: payload.token,
        };
      },
    }),
  ],
  // success login , user refresh , getSession
  callbacks: {
    //token obj
    //user obj
    jwt({ token, user }) {
      // console.log(params);
      // mn 2l user b7ot f 2l token
      if (user) {
        token.id = user.id;
        token.token = user.token; //access token
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};
