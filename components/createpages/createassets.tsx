"use client";

import { CreateAssetSchema, createAssetSchema } from "@/lib/validation/assets";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import Nav from "../../app/sidenav/Nav";


export default function CreateAssets() {
  const form = useForm<CreateAssetSchema>({
    resolver: zodResolver(createAssetSchema),
    defaultValues: {
      model: "",
      status: "",
      serial: "",
      category: "",
    },
  });

  async function handleOnSubmit(input: CreateAssetSchema) {
    try {
      const response = await fetch("/api/assets", {
        method: "POST",
        body: JSON.stringify(input),
      });
  
      if (!response.ok) {
        throw Error("Status code: " + response.status);
      } else {
        // Show success alert
        alert("Form submitted successfully!");
        // Reload the page upon successful submission
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle any errors here, if necessary
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Nav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="flex items-center justify-center py-5">
            <div className="mx-auto grid w-[600px] gap-6">
            <h1 className="text-3xl font-bold">Create New Asset</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g Samsung" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g Active, Spare, Deployed"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g SN12345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g Sample Category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className=" mt-3">Submit</Button>
            </form>
          </Form>
        </div>
        </main>
      </div>
    </div>
  );
}
