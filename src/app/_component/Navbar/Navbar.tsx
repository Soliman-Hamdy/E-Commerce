"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import logo from "../../../assets/images/freshcart-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@base-ui/react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { cartResponseType } from "@/src/api/types/cartType";
import { getCart } from "@/src/api/actions/cartActions/getCart";
import { getWishlist } from "@/src/api/actions/wishlistActions/getWishlist";
import { ChevronDown, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const categoryLinks = [
  { label: "All Categories", value: "" },
  { label: "Electronic", value: "electronic" },
  { label: "Women's Fashion", value: "women's fashion" },
  { label: "Men's Fashion", value: "men's fashion" },
  { label: "Beauty&Health", value: "beauty&health" },
];

function getCategoryHref(value: string) {
  return value ? `/shop?category=${encodeURIComponent(value)}` : "/shop";
}

export default function Navbar() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [themeReady, setThemeReady] = React.useState(false);
  const { data: sessionData, status } = useSession();
  const { data: cartData } = useQuery<cartResponseType>({
    queryKey: ["getCart"],
    queryFn: async () => {
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("failed to fetch");
      return response.json();
    },
    enabled: status === "authenticated",
  });
  const { data: wishlistData } = useQuery({
    queryKey: ["getWishlist"],
    queryFn: getWishlist,
    enabled: status === "authenticated",
  });
  console.log("cart data ", cartData);
  React.useEffect(() => setThemeReady(true), []);
  function handleLogout() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchTerm = String(
      new FormData(event.currentTarget).get("search") ?? "",
    ).trim();
    router.push(
      searchTerm ? `/shop?search=${encodeURIComponent(searchTerm)}` : "/shop",
    );
  }
  console.log(status);

  return (
    <NavigationMenu
      className="bg-white max-w-full p-3"
      delay={0}
      closeDelay={50}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <NavigationMenuList className="flex items-center justify-between">
        <h2 className="flex gap-2">
          <Image src={logo} alt="FreshCart" />
        </h2>
        <form
          role="search"
          onSubmit={handleSearch}
          className="relative mx-1 flex min-w-0 flex-1 items-center sm:mx-3 md:max-w-xl"
        >
          <Input
            name="search"
            type="search"
            placeholder="Search for products, brands and more..."
            aria-label="Search products, brands, and categories"
            className="h-11 rounded-full border-slate-200 bg-white py-2 pl-5 pr-14 text-sm shadow-none focus-visible:border-green-500 focus-visible:ring-green-100"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1 flex size-9 items-center justify-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <Search aria-hidden="true" className="size-5" />
          </button>
        </form>
        <button
          type="button"
          aria-label={
            themeReady && resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            themeReady && resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-slate-700"
        >
          {themeReady && resolvedTheme === "dark" ? (
            <Sun aria-hidden="true" className="size-5" />
          ) : (
            <Moon aria-hidden="true" className="size-5" />
          )}
        </button>
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/" title="Home" />
              <ListItem href="/brands" title="Brands" />
              <ListItem href="/shop" title="Shop" />
              <li className="px-2 pt-1">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-2 text-sm font-semibold hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    Categories
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="pl-2">
                    {categoryLinks.map((category) => (
                      <li key={category.label}>
                        <NavigationMenuLink
                          render={
                            <Link href={getCategoryHref(category.value)}>
                              {category.label}
                            </Link>
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" md:flex gap-6 hidden items-center">
          <Link className="font-semibold hover:text-green-500" href="/">
            Home
          </Link>
          <Link className="font-semibold hover:text-green-500" href="/shop">
            Shop
          </Link>
          <Link className="font-semibold hover:text-green-500" href="/brands">
            Brand
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-green-500">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1 p-2">
                {categoryLinks.map((category) => (
                  <li key={category.label}>
                    <NavigationMenuLink
                      render={
                        <Link href={getCategoryHref(category.value)}>
                          {category.label}
                        </Link>
                      }
                    />
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link className="font-semibold hover:text-green-500 " href="/support">
            <div className="flex items-center gap-2 border-r pr-2">
              <div className=" rounded-full bg-green-50 p-3 ">
                <svg
                  data-prefix="fas"
                  data-icon="headset"
                  className="svg-inline--fa fa-headset size-5 text-green-600 "
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="text-gray-400 font-light text-sm">
                  Support
                </span>
                <h4 className="text-sm">24/7 Help</h4>
              </div>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" md:flex gap-6 hidden items-center">
          {status === "authenticated" ? (
            <>
              <Link
                href="/cart"
                className="relative inline-flex items-center justify-center"
              >
                {(cartData?.numOfCartItems ?? 0) > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-semibold flex items-center justify-center px-1 leading-none shadow-sm">
                    {cartData?.numOfCartItems}
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
              <Link
                href="/wishlist"
                className="relative inline-flex items-center justify-center"
              >
                {(wishlistData?.length ?? 0) > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold leading-none text-white shadow-sm">
                    {wishlistData?.length}
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-1 rounded-2xl bg-green-600 px-3 py-2 text-white shadow-2xl"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                <span>Log out</span>
              </button>{" "}
            </>
          ) : (
            <Button className="bg-green-600 py-2 px-3 text-white rounded-2xl flex items-center gap-1 shadow-2xl">
              {" "}
              <Link href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
              Sign in
            </Button>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
          </Link>
        }
      />
    </li>
  );
}
