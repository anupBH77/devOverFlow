"use client";
import { tabList } from "@/utils/constants/TabList";
import { UserButton } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const curPath = usePathname();

  return (
    <div className=" bg-[#03030a] text-white  hidden md:flex  justify-between border border-opacity-50  border-gray-800  border-t-0 flex-col  h-[90vh] w-[30rem] ">
    <div className="w-full h-1/2 flex-col justify-center mt-4">
        {tabList.map((tab) => (
          <div
            onClick={() => router.push(tab.routeUrl)}
            className={`${
              curPath == tab.routeUrl ? "bg-orange-500 " : ""
            } hover:cursor-pointer align-middle mt-6 items-center gap-5 pl-5 mx-auto left-0 right-0 rounded-md flex py-5 w-[90%] `}
          >
            <tab.routeIcon size={35}></tab.routeIcon>
            <span className=" text-2xl">{tab.routename}</span>
          </div>
        ))}
        

      </div>
    </div>
  );
};

export default SideBar;
