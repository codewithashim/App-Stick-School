
import { NoticeIcon } from "@/src/Assets";
import { ResultData } from "@/src/Utils/MockData/ResultMockData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";


const ResultComponent = () => {
    return (
        <section>
        <div className="border">
            <h1 className="text-[2rem] flex gap-4 items-center notice-container">
            <FaBuromobelexperte/> Result
            </h1>
      
              <div className="grid gap-4 md:grid-cols-2"> 
                 {
                    ResultData.map((result)=>{
                   return(
                     <div className="flex items-center gap-6 p-4 my-4 border rounded">
                      <div className="notice-icons">
                        <Image
                          src={NoticeIcon}
                          alt={result?.title}
                        />
                      </div>

                      <div>
                        <Link href={`/result/${result?.id}`} className="text-[1.2rem] font-semibold mb-2 ">{result?.title}</Link>
                        <p className="my-3 text-gray-800">Publish Date {result?.resultDate}</p>
                        <Link href={`/result/${result?.id}`} className="text-blue-500 text-[1.2rem]"> Read More</Link>
                      </div>
                     </div>         
                   )           
                  })  
                 } 
              </div>
        </div>
    </section>
    );
};

export default ResultComponent;