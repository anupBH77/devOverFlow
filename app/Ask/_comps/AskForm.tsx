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
import { useState } from "react"


const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  tagList: z.array(z.string()).nonempty({
    message: "At least one tag is required.",
  }),
  tag:z.string().refine((value) => !/\s/.test(value), {
    message: "Input should not contain spaces"
  })

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
      const [tagList,setTagList] = useState<string[]>([])
      
      const handleTagSelect = (e:any) => {

       if(e.currentTarget.value.length>10) return
        form.setValue("tag", e.currentTarget.value.trim()) 
        
      }
      const onKeyDown = (e:any) => {
        if (e.key === "Enter") {
          e.preventDefault()
          if(e.currentTarget.value=="") return
          console.log(tagList.length)
          if(tagList.length>4) {
            form.setError("tag", {
              type: "manual",
              message: "You can only add 5 tags"
            })
            return;
          }
          setTagList([...tagList,e.currentTarget.value.trim()])
          form.setValue("tagList",
      //@ts-ignore
       tagList)
          form.setValue("tag", "")   
        }
      
      }
      const removeTag = (index:number) => {
        const newTags = tagList.filter((_, i) => i !== index)
       
       setTagList(newTags);
      }
      function onSubmit(values: z.infer<typeof formSchema>) {

     
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="  space-y-8 flex-wrap ">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl className="focus:outline-none ">
                <Input placeholder="eg. how to handle error?" {...field} className="border-none p-10 focus:border-none text-lg focus:outline-none pl-2 text-white  bg-transparent bg-slate-700 outline-none" />
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
                <Input 
                //@ts-ignore
               placeholder="eg. javascript, react" {...field } onChange={handleTagSelect} onKeyDown={onKeyDown}className="p-10 text-lg focus:border-black focus:outline-none pl-2 text-white border-none bg-transparent bg-slate-700 outline-none" />
              </FormControl>
              <FormDescription>
                Add tags to your question.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
          <div className="flex flex-row gap-8 flex-wrap bg w-1/2">
            {tagList.map((tag, index) => (
              <div key={index} className="text-gray-400 bg-slate-900 shadow-2xl shadow-gray-800 items-center p-0 justify-center relative  ">
              <RxCrossCircled size={25} onClick={()=>removeTag(index)} className=" hover:cursor-pointer absolute right-[-15px] top-[-15px]"/>
                <p className="text-center text-lg p-2 px-4 ">
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