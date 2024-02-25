"use client"
import SearchBar from "@/components/inputs/SearchBar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomeLayout = () => {
    const router = useRouter();
  return (
    <div className=" w-full p-5">
      <div className=" flex  items-center justify-between  ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          All Questions
        </h1>
        <Button size={"lg"} className=" bg-orange-400 lg:text-xl p-8  " onClick={()=>router.push('/Ask')}>Ask a Question</Button>
      </div>
      <SearchBar placeholder="Search Questions..." className="   p-4 w-full mt-5"/>
    </div>
  );
};
export default HomeLayout;
