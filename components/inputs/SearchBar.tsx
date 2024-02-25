import { cn } from "@/lib/utils";
import { BiSearch, BiSearchAlt, BiSearchAlt2, BiSolidSearch } from "react-icons/bi";
interface sBPrps{
    className?:string,
    placeholder:string,
    onClick?:()=>void,
    onChange?:()=>void,
    value?:string
}
export default function SearchBar({placeholder,onClick,onChange,value,className}:sBPrps){
    return(
        <div className={cn("rounded-md   bg-slate-800  left-0 right-0 mx-auto flex items-center",className)}>
            <BiSearchAlt  className=" w-[10%] m-auto p-2 hover:cursor-pointer  " color=" gray" size={40} fontWeight={2} />
                <input placeholder={placeholder} type="text" className="  h-full focus:outline-none pl-2  text-lg bg-transparent w-[90%]"/>
        </div>
    )
}