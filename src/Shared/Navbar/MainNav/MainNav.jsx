"use client";
import Link from "next/link";
import { useState } from "react";
import { BiHome, BiMenu } from "react-icons/bi";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { AuthContext } from "@/src/Context/UserContext";
import { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import logout from "@/src/Shared/Logout/Logout";
import { Button } from "@mui/material";
import useHeadersData from "@/src/Hooks/useHeadersData";

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const { headersData } = useHeadersData();
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout()
      .then(() => {
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
        localStorage.removeItem("user-uid");
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something warn!",
          confirmButtonColor: "#0077b6",
        });
      });
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
      <nav className="p-1">
        {headersData &&
          headersData.map((header) => {
            return (
              <div className="grid-cols-4 text-white md:grid">
                <div className="flex items-center col-span-3 gap-3 ">
                  <Image
                    className="m-auto md:m-0"
                    src={header?.logo}
                    alt="Description of the image"
                    width={60}
                    height={60}
                    style={{
                      borderRadius: "5px",
                    }}
                  />

                  <div className="text-center md:text-start">
                    <small className="text-[#e3e3e3]">
                      Estd -{header?.estdSince}
                    </small>
                    <h2 className="text-xl font-bold">{header?.schoolName}</h2>
                    <p className="text-[#e4e2e2] text-md">
                      {header.schoolAddress}
                    </p>
                  </div>
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
        <div className="flex items-center justify-center ">
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden bg-[#00000062] px-3 py-1 "
          >
            <BiMenu className="text-xl" />
          </button>
        </div>

        <ul
          className={`${
            open ? "block" : "hidden"
          }  md:flex items-center gap-4 nav-manu-list`}
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
        </ul>
      </nav>
    </section>
  );
};

export default MainNav;
