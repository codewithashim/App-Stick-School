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
      path: "/academic",
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
    <nav className=" bg-[#0d4a4fab] text-white md:flex items-center">
      <button className="px-2 py-1 md:px-9 md:py-2">
        <BiHome className="text-xl" />
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto md:hidden block float-right bg-[#00000062] px-3 py-1"
      >
        <BiMenu className="text-xl" />
      </button>

      <ul className={`${open ? "block" : "hidden"}  md:flex gap-4`}>
        {link.map((itm, i) => (
          <Link key={i} href={itm.path}>
            <li
              className={`px-9 py-2 text-center ${
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
