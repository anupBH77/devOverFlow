"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import TextEditor from "@/components/inputs/TextEditor"


const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
})

export function AskForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          question: "",

        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl className="focus:outline-none ">
                <Input placeholder="eg. how to handle error?" {...field} className=" p-10 text-lg focus:outline-none pl-2 text-white  bg-transparent bg-slate-700 outline-none" />
              </FormControl>
              <FormDescription>
                Detailed Question.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <TextEditor/>
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl className="focus:outline-none ">
                <Input placeholder="eg. how to handle error?" {...field} className=" p-10 text-lg focus:outline-none pl-2 text-white  bg-transparent bg-slate-700 outline-none" />
              </FormControl>
              <FormDescription>
                Detailed Question.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" bg-orange-400 text-lg p-7 float-right">Submit</Button>


      </form>
    </Form>
  )
}

export default AskForm