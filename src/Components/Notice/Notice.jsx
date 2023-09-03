import { NoticeData } from "@/src/Utils/MockData/NoticeMockData";
import Link from "next/link";
import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";


const Notice = () => {
  return (
    <section>
        <div className="border notice-container">
            <h1 className="text-[2rem] flex gap-4 items-center">
            <FaBuromobelexperte/> Notice 
            </h1>
      
              <div className="m-4 notice-items"> 
                 {
                  NoticeData.map((notice)=>{
                   return(
                     <div className="p-4 my-4 border rounded ">
                        <Link href={`/notice/${notice?.id}`} className="text-[1.2rem] font-semibold mb-2 text-blue-500">{notice?.title}</Link>
                        <p className="mt-3 text-gray-200">{notice?.noticeDate}</p>
                     </div>         
                   )           
                  })  
                 } 
              </div>
        </div>
    </section>
  );
};

export default Notice;
