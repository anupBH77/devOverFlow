"use client"
import { tabList } from '@/utils/constants/TabList'
import { useRouter,usePathname } from 'next/navigation'
import React, { useState } from 'react'

const NevBar = () => {
    const router = useRouter();
    const curPath = usePathname()
   
  return (
    <div className=' hidden md:flex flex-col  border border-opacity-50  border-gray-800  pt-4 border-y-0 border-l-0  h-screen  w-1/4 '>
        {tabList.map(tab=><div onClick={()=>router.push(tab.routeUrl)} className={`${curPath==tab.routeUrl ?'bg-orange-500 ':''} hover:cursor-pointer align-middle items-center gap-5 pl-5 flex py-5 `}>
            <tab.routeIcon size={30}></tab.routeIcon>
            <span className=' font-light'>{tab.routename}</span>
        </div>)}
    </div>
  )
}

export default NevBar