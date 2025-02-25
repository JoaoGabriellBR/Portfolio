"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import MagneticButton from "./ui/button-magnetic";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeroTitle from "./ui/hero-title";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    })
    .max(50, {
      message: "Nome de usuário excedeu os 50 caracteres",
    }),
  email: z
    .string()
    .min(1, { message: "O e-mail é obrigatório." })
    .email({ message: "Endereço de e-mail inválido." }),
  message: z.string().min(5, {
    message: "A mensagem deve ter pelo menos 5 caracteres.",
  }),
});

export function ProfileForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

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
      toast({
        duration: 4000,
        title: "Mensagem enviada com sucesso",
        description: "Em Breve, entrarei em contato!",
      });

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

      form.reset();
    } catch (error: any) {
      console.error(error.message);
      toast({
        duration: 4000,
        title: "Erro ao enviar o formulário",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-2/3 lg:w-1/3">
      <Form {...form}>
        <form className="space-y-8 text-start">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
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
                <FormControl>
                  <Textarea placeholder="Digite sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <MagneticButton
            onClick={form.handleSubmit(onSubmit)}
            distance={1}
            className="w-72 h-20 text-2xl p-5"
          >
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
              {isLoading ? (
                <AiOutlineLoading3Quarters className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-3xl animate-spin" />
              ) : (
                <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-3xl" />
              )}
            </MagneticButton>
          </MagneticButton>
        </form>
      </Form>
    </div>
  );
}
