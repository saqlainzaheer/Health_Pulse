'use client'

import Logo from "./_components/Logo";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Home() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="ml-20 flex h-screen text-white">
        <div className="w-1/2">
          <Logo />
          <div className="mt-20">
            <p className="text-4xl font-bold">Hi there.... Welcome to</p>
            <p className=" mt-5 text-sm">
              Get Started with Appointments.
            </p>
          </div>

          <div className="mr-10 mt-4">
            <div className=" ">

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
              </Form>
            </div>
              
          </div>
        </div>

        <div className="relative h-full w-1/2">
          <Image
            src="/assets/images/onboarding-img.png"
            alt="Health Pulse Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
