"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Link from "next/link";
import MagneticButton from "./ui/button-magnetic";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeroTitle from "./ui/hero-title";
import { IoIosArrowRoundForward } from "react-icons/io";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Nome de usuário excedeu os 50 caracteres",
    }),
  email: z.string().email({ message: "Endereço de e-mail inválido." }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-2/3 lg:w-1/3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input placeholder="Nome" className="h-14" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Mensagem</FormLabel> */}
                <FormControl>
                  <Textarea placeholder="Digite sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Link href="https://github.com/JoaoGabriellBR" target="blank"> */}
          <MagneticButton distance={1} className="w-72 h-20 text-2xl p-5">
            <MagneticButton
              className="flex flex-row justify-center items-center gap-2"
              distance={0.5}
              border={false}
            >
              <HeroTitle
                className="pb-0 pr-0"
                text="Enviar mensagem"
                letterPadding={false}
                size="very_small"
              />
              <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
            </MagneticButton>
          </MagneticButton>
          {/* </Link> */}
        </form>
      </Form>
    </div>
  );
}
