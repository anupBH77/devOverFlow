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
import { RxCrossCircled } from "react-icons/rx"


const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  tagList: z.array(z.string()).nonempty({
    message: "At least one tag is required.",
  }),
  tag:z.string()
})

export function AskForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          question: "",
          tagList:[],
          tag:""

        },
      })
      const handleTagSelect = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          console.log(form.getValues())
       
          form.setValue("tag", e.currentTarget.value) 
          form.setValue("tagList", [...form.getValues("tagList"), e.currentTarget.value])
          form.setValue("tag", "") 

         
        }
      
      }
      function onSubmit(values: z.infer<typeof formSchema>) {

     
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
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input onKeyDown={handleTagSelect} placeholder="eg. javascript, react" {...field} className="p-10 text-lg focus:outline-none pl-2 text-white  bg-transparent bg-slate-700 outline-none" />
              </FormControl>
              <FormDescription>
                Add tags to your question.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
          <div className="flex flex-row gap-4 flex-wrap">
            {form.getValues("tagList").map((tag, index) => (
              <div key={index} className="bg-slate-700 min-w-16 items-center justify-center text-white  rounded-sm">
              <RxCrossCircled size={20} className=" left-12 bottom-2   relative"/>
                <p className="text-center text-lg">
                {tag}
                </p>
              </div>
            
            ))}
          </div>
        <Button type="submit" className=" bg-orange-400 text-lg p-7 float-right">Submit</Button>


      </form>
    </Form>
  )
}

export default AskForm