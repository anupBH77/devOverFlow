import { UserButton } from "@clerk/nextjs";
import SearchBar from "../inputs/SearchBar";

export default function NevBar(){
    return(
        <div className=" items-center  flex justify-between sticky top-0 bg-black  border border-opacity-50  border-gray-800 border-x-0 border-t-0 bg-opacity-50 backdrop-blur-md h-[10vh]">
            <h1 className="text-2xl font-light">NevBar</h1>
            <SearchBar placeholder="Search Globally..." className="w-1/3 h-1/2"/>
            <span className=" m-2">
            <UserButton />
        </span>
        </div>
    )
}