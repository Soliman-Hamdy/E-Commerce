"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FieldError, FieldLabel } from "@/components/ui/field";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { payCash } from "@/src/api/actions/payments/paycash.actions";
import { payOnline } from "@/src/api/actions/payments/payonline.action";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
export interface shippingData {
  details: string;
  phone: string;
  city: string;
  postalCode: string;
}
export default function CheckoutForm({ cartId }: { cartId: string }) {
  const router = useRouter();
  const { handleSubmit, control } = useForm<shippingData>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      postalCode: "",
    },
  });
  async function submitForm(data: shippingData) {
    console.log(data);
    const payload = await payCash(cartId, data);
    console.log("payload", payload);
    if (payload.status === "success") {
      toast.add({
        type: "success",
        description: "Order Created",
      });
      //   window.location.href = "http://localhost:3000/";
      router.push("/");
    } else {
      toast.add({
        type: "error",
        description: "Order Failed",
      });
    }
  }
  async function submitOnlineForm(data: shippingData) {
    try {
      const payload = await payOnline(cartId, data);
      const checkoutUrl = payload?.session?.url;

      if (!checkoutUrl) {
        throw new Error("Checkout URL is missing");
      }

      window.location.href = checkoutUrl;
    } catch {
      toast.add({
        type: "error",
        description: "Online payment failed",
      });
    }
  }
  return (
    <div className=" w-1/2 mx-auto my-10 p-10">
      <h2>CheckOut</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-8">
          <Controller
            name="details"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>details</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your details"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>phone</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your phone"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>city</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your city"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="postalCode"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>postalCode</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your postalCode"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div className="mt-3 flex gap-3">
          <Button className="flex-1 bg-gray-600 text-white" type="submit">
            Pay on delivery
          </Button>
          <Button
            className="flex-1 bg-green-600 text-white"
            type="button"
            onClick={handleSubmit(submitOnlineForm)}
          >
            Pay online
          </Button>
        </div>
      </form>
    </div>
  );
}
