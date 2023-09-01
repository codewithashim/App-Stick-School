'use client'
import Link from "next/link";
import { useState } from "react";
import { BiHome, BiMenu } from "react-icons/bi";
 
const TopNav = () => {
  const [open, setOpen] = useState(false);
  const link = [
    {
      title  : "Home",
      path : "/"
    },
    {
      title  : "About",
      path : "/about"
    },
    {
      title  : "Academic",
      path : "/academic"
    },
    {
      title  : "Admission",
      path : "/admission"
    },
    {
      title  : "Student",
      path : "/student"
    },
    {
      title  : "Facilities",
      path : "/facilities"
    },
    {
      title  : "Result",
      path : "/result"
    },
    {
      title  : "Others",
      path : "/others"
    },
    {
      title  : "Contact",
      path : "/contact"
    },
  ]
  return (
    <nav className=" bg-[#0d4a4fab] text-white md:flex items-center">
       <button className="md:px-9 px-2 md:py-2 py-1">
          <BiHome className="text-xl"/>
       </button>
        <button onClick={()=> setOpen(!open)} className="ml-auto md:hidden block float-right bg-[#00000062] px-3 py-1"><BiMenu className="text-xl" /></button>
         
          <ul className={`${open ? 'block' : 'hidden'}  md:flex gap-4`}>
             {
                 link.map((itm,i) =><Link key={i} href={itm?.path}>
                     <li className="bg-[#07232a00] hover:bg-[#07232a76] duration-150 px-9 py-2 text-center">{itm?.title}</li>
                 </Link>)
             }
           
            </ul>
    </nav>
  );
};

export default TopNav;
