"use client";
import { AuthContext } from "@/src/Context/UserContext";
import useHeadersData from "@/src/Hooks/useHeadersData";
import logout from "@/src/Shared/Logout/Logout";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import Swal from "sweetalert2";

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const { headersData } = useHeadersData();
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout()
    Swal.fire({
      position: "top-end",
      timerProgressBar: true,
      title: "Successfully Logout Done !",
      iconColor: "#ED1C24",
      toast: true,
      icon: "success",
      showClass: {
        popup: "animate__animated animate__fadeInRight",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutRight",
      },
      customClass: {
        confirmButton: "blue",
      },
      showConfirmButton: false,
      timer: 3500,
    });
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    router.push("/");
  };

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
      title: "Student",
      path: "/student",
    },
    {
      title: "Teachers",
      path: "/teachers",
    },
    {
      title: "Staff",
      path: "/staff",
    },
    {
      title: "Committee",
      path: "/committee",
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
  ];

  return (
    <section>
      <nav className="px-1 py-3">
        {headersData &&
          headersData.map((header) => {
            return (
              <div className="grid-cols-4 text-white md:grid">
                <div className="flex items-center justify-between col-span-3 gap-3 px-2 ">
                    <div className="flex items-center gap-3">
                         <Image
                            className="m-0"
                            src={header?.logo}
                            alt="Description of the image"
                            width={80}
                            height={80}
                            style={{
                              borderRadius: "5px",
                            }}
                          />

                          <div className="text-start">
                            <small className="text-[#e3e3e3]">
                              Estd -{header?.estdSince}
                            </small>
                            <h2 className="font-bold md:text-xl text-md">{header?.schoolName}</h2>
                            <p className="text-[#e4e2e2] md:text-md text-sm">
                              {header.schoolAddress}
                            </p>
                          </div>
                    </div>
                    <button onClick={()=> setOpen(!open)}>
                         <BiMenu  className="block text-4xl md:hidden" />
                    </button>
                </div>
                <div className="hidden md:block">
                  <div className="items-center justify-center gap-6 md:flex blog md:justify-end">
                    <span className="flex items-center justify-center gap-2 text-center md:justify-start">
                      <IoMdCall /> {header?.phone}
                    </span>
                    <span className="flex items-center justify-center gap-2 md:justify-start">
                      <HiMail /> {header?.email}
                    </span>
                  </div>

                  {/* action button */}
                  <div className="flex items-center justify-center gap-2 mt-2 md:justify-end">
                    {/* <button className="btn bg-[#124358] px-5 py-1 rounded-md">বাংলা</button> */}
                    {user ? (
                      <>
                        <Link
                          fullWidth
                          className="flex items-center justify-center gap-4 commonBtn pointer"
                          href="/dashboard"
                        >
                         Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/auth/login"
                          className="btn bg-[#124358] px-4 py-1 rounded-md"
                        >
                          Login
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </nav>

      <nav className=" bg-[#0d4a4fab] text-white md:flex items-center ">
        <ul
          className={`${
            open ? "block" : "hidden"
          }  md:flex items-center gap-4 nav-manu-list md:pb-2 pb-14 px-2 pt-2`}
        >
          {link?.map((itm, i) => (
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
          <li className="relative md:hidden">
              {user ? (
                      <>
                        <Button
                          fullWidth
                          className="flex items-center justify-center gap-4 commonBtn pointer"
                          onClick={() => handleLogout()}
                        >
                          <FaPowerOff />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/auth/login"
                          className="btn md:bg-[#ff000000] bg-[#2495c6] md:w-auto w-[90%] mx-auto md:py-0 py-2 text-center text-white rounded-md md:relative absolute top-0 left-0 right-0"
                        >
                          Login
                        </Link>
                      </>
                    )}
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainNav;