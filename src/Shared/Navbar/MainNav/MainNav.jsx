"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BiHome, BiMenu } from "react-icons/bi";

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter(); 
  const link = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Academic",
      path: "/academic-info",
    },
    {
      title: "Teachers",
      path: "/teachers",
    },
    {
      title: "Result",
      path: "/result",
    },
    {
      title: "Notice",
      path: "/notice",
    },
    {
      title: "Photo Gallery",
      path: "/photo-gallary",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  
  return (
    <nav className=" bg-[#0d4a4fab] text-white md:flex items-center ">
      <div className="flex items-center justify-center">
      <Link className="px-2 py-1 md:px-4 md:py-2"  href="/" >
        <BiHome className="text-xl"/>
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto md:hidden bg-[#00000062] px-3 py-1 "
      >
        <BiMenu className="text-xl" />
      </button>
      </div>



      <ul className={`${open ? "block" : "hidden"}  md:flex items-center gap-4 nav-manu-list`}>
        {link.map((itm, i) => (
          <Link key={i} href={itm.path}>
            <li
              className={`px-4 py-2 text-center ${
                router.asPath === itm.path
                  ? "bg-[#07232a76]"
                  : "bg-[#07232a00] hover:bg-[#07232a76] duration-150"
              }`}
            >
              {itm.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
