"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import emailjs from "@emailjs/browser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import MagneticButton from "./ui/button-magnetic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Typography from "./ui/typography";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";

export function ProfileForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("Contact.Form");

  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: t("inputName.error1") })
      .max(50, { message: t("inputName.error2") }),
    email: z
      .string()
      .min(1, { message: t("inputEmail.error1") })
      .email({ message: t("inputEmail.error2") }),
    message: z.string().min(5, {
      message: t("inputMessage.error1"),
    }),
  });

  const inputs = [
    {
      name: "username",
      label: t("inputName.label"),
    },
    {
      name: "email",
      label: t("inputEmail.label"),
    },
    {
      name: "message",
      label: t("inputMessage.label"),
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const templateParams = {
        name: values.username,
        email: values.email,
        message: values.message,
      };

      await emailjs.send(
        String(process.env.NEXT_PUBLIC_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
        templateParams,
        {
          publicKey: String(process.env.NEXT_PUBLIC_KEY_PUBLIC),
        }
      );

      toast({
        variant: "success",
        duration: 4000,
        title: t("toast.success.title"),
        description: t("toast.success.description"),
      });

      form.reset();
    } catch (error: any) {
      console.error(error.message);
      toast({
        variant: "error",
        duration: 4000,
        title: t("toast.error.title"),
        description: t("toast.error.description"),
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-2/3 lg:w-1/3">
      <Form {...form}>
        <form className="space-y-8 text-start">
          {inputs.map((input: any) => (
            <FormField
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {input.name !== "message" ? (
                      <Input label={input.label} className="h-14" {...field} />
                    ) : (
                      <Textarea label={input.label} {...field} />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <MagneticButton
            onClick={form.handleSubmit(onSubmit)}
            distance={1}
            className="w-72 h-20 text-2xl p-5 flex flex-row justify-center items-center gap-2"
          >
            <Typography
              className="pb-0 pr-0"
              text={t("button")}
              letterPadding={false}
              size="very_small"
            />
            {isLoading ? (
              <ImSpinner9 className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-xl animate-spin" />
            ) : (
              <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-3xl" />
            )}
          </MagneticButton>
        </form>
      </Form>
    </div>
  );
}
