import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { Logo } from "@/src/Assets";
import Link from "next/link";
import { AuthContext } from "@/src/Context/UserContext";
import { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import logout from "@/src/Shared/Logout/Logout";
import { Button } from "@mui/material";
import useHeadersData from "@/src/Hooks/useHeadersData";

const TopNav = () => {
  const { headersData } = useHeadersData();
  const { user } = useContext(AuthContext);
  const router = useRouter();

  console.log(headersData);

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

  return (
    <nav className="p-1">
      {headersData &&
        headersData.map((header) => {
          return (
            <div className="grid-cols-4 text-white md:grid">
              <div className="items-start col-span-3 gap-3 md:flex">
                <Image
                  className="m-auto md:m-0"
                  src={header?.logo}
                  alt="Description of the image"
                  width={80}
                  height={80}
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
              <div className="">
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
  );
};

export default TopNav;
