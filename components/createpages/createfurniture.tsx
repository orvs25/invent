"use client";

import { CreateFurnitureSchema, createFurnitureSchema } from "@/lib/validation/furniture";
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
import Nav from "@/app/sidenav/Nav";

export default function CreateFurniture() {
    const form = useForm<CreateFurnitureSchema>({
        resolver: zodResolver(createFurnitureSchema),
        defaultValues: {
            furnitureName: "",
            category: "",
            modelNo: "",
            manufacturer: "",
            location: "",
            purchaseDate: "",
            purchaseCost: "",


        },
    });

    async function handleOnSubmit(input: CreateFurnitureSchema) {
        try {
          const response = await fetch("/api/furniture", {
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
                        <h1 className="text-3xl font-bold">Create New Furniture</h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="furnitureName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Furniture Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="..." {...field} />
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
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="modelNo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Model No</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="manufacturer"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Manufacturer</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>location</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purchaseDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purchase Date</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="purchaseCost"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Purchase Cost</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="...."
                                                    {...field}
                                                />
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
