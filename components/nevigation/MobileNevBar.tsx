"use client"
import { tabList } from '@/utils/constants/TabList'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const MobileNevBar = () => {
  const router = useRouter();
  const curPath = usePathname();
  return (

    <div className=' md:hidden flex flex-[5] justify-between bottom-0 fixed w-full border-x-0 border-b-0 border-gray-800 border-opacity-40 border-[0.5px]'>
    
      {tabList.map((tab)=><div className={` p-2 pt-3 hover:cursor-pointer ${curPath==tab.routeUrl && 'bg-orange-500 rounded-sm'}`} onClick={()=>router.push(tab.routeUrl)}>
        <tab.routeIcon size={20} color={` ${curPath==tab.routeUrl ?'white':'gray'}`} className=' align-middle m-auto font-thin'/>
        {/* <span className=' font-sans text-sm'>{tab.routename}</span> */}
      </div>)}
    </div>
  )
}

export default MobileNevBar