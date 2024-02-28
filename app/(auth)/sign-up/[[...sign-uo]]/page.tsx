import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return   <div className=" w-[100vw] fixed top-0 z-[10000] h-[100vh] flex items-center justify-center  bg-black">
  <SignUp />
</div>;;
}