"use client";

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

const formSchema = z.object({
  username: z.string().email({
    message: "Invalid email address",
  }),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-screen">
      <div className="max-w-lg mx-3 md:mx-auto p-4 mt-20 h-72 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#31511E]">
          Form Berlangganan
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="tanamkopi@gmail.com"
                      {...field}
                      className="border-gray-300 rounded-md"
                    />
                  </FormControl>
                  <FormDescription>
                    Kami akan mengirimkan promo menarik melalui email Anda.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full md:w-auto bg-[#88C273] text-white hover:bg-[#88C273] hover:saturate-200 transition duration-200"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
