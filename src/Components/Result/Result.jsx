
import { ResultData } from "@/src/Utils/MockData/ResultMockData";
import Link from "next/link";
import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";


const ResultComponent = () => {
    return (
        <section>
        <div className="border notice-container">
            <h1 className="text-[2rem] flex gap-4 items-center">
            <FaBuromobelexperte/> Result
            </h1>
      
              <div className="m-4 result-items"> 
                 {
                    ResultData.map((result)=>{
                   return(
                     <div className="p-4 my-4 border rounded ">
                        <Link href={`/result/${result?.id}`} className="text-[1.2rem] font-semibold mb-2 text-blue-500">{result?.title}</Link>
                        <p className="mt-3 text-gray-200">{result?.resultDate}</p>
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