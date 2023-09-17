import { AppsticitLogo } from "@/src/Assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import useFooter from "@/src/Hooks/useFooter";

const Footer = () => {
  const {footerData, linkData} = useFooter()
  if (!footerData || footerData.length === 0) {
    return null; x
  }

  const footerDataResult = footerData[0]
  
  console.log(footerDataResult , "footerData++")

  const { 
    schoolDetail,
    latitude,
    longitude,
    schoolAddress,
    schoolName,
    email,
    phone,
    facebook,
    twitter } = footerDataResult;

  return (
    <footer className="bg-gray-900 text-center mt-4  text-white dark:text-neutral-200 lg:text-left w-[100%]">
      <div className="container">

      <div className="h-[20rem]">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kempapura Main Rd, Hebbal Kempapura, Bengaluru, Karnataka 560024&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-6 border-b-2 border-neutral-200 dark:border-neutral-500 lg:justify-between">
          <div className="hidden mr-12 lg:block">
            <span>Get Connected Our Social Networks:</span>
          </div>

          <div className="flex justify-center">
            <Link
              href={facebook}
              className="mr-6 text-neutral-600 dark:text-neutral-200 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
            >
              <FaFacebook className="text-[1.9rem]" />
            </Link>
          </div>
        </div>

        <div className="py-10 mx-6 md:text-left">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="md:w-[40%]">
          <p className="text-[1.5rem] font-bold">
         {schoolName}
        </p>

        <div className="about-content">
          <h1 className=" text-[1rem] my-4 t">
           {schoolDetail}
          </h1>
        </div>
            </div> 
            <div>
              <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start text-[1.5rem]">
                Contact
              </h6>
              <Link
                href="/"
                className="mb-4 flex items-center justify-center md:justify-start gap-4  color-b rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
              >
                <FaMapMarkerAlt className="text-[1.9rem]" />
                {schoolAddress}
              </Link>
              <Link
                href={`mail:${email}`}
                className="mb-4 flex items-center justify-center md:justify-start gap-4 color-b rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
              >
                <FaRegEnvelope className="text-[1.9rem]" />
                {email}
              </Link>
              <Link
                href={`tel:${phone}`}
                className="mb-4 flex items-center justify-center md:justify-start gap-4 color-b rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
              >
                <FaPhoneAlt className="text-[1.9rem]" />
                {phone}
              </Link>
            </div>

            <div className="text-white">
              <h6 className="flex justify-center mb-4 font-semibold text-[1.5rem] uppercase md:justify-start">
                Importent Links
              </h6>
              <ul>
              {
                  linkData &&  linkData.map((item) => {
                  return(
              <li className="mb-4 color-b  rounded-md duration-300 transform   hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500 "  key={item?._id}>
                <Link
                  href={item?.url}
                 
                  className=" dark:text-neutral-200"
                >
                  {item?.title}
                </Link>
              </li>
              )})}
              </ul>
          
            </div>
          </div>
        </div>

      

        <div className=" border-t-2 border-[hsla(216,8%,88%,.15)] py-2 mt-10 flex justify-between md:flex-row flex-col items-center mx-6">
          <div className="p-6 text-center text-white text-[1.3rem]">
            <span>© {new Date().getFullYear()} Copyright: </span>
            <Link
              className="font-semibold text-white dark:text-neutral-400"
              href="http://appsticit.com/"
            >
              {schoolName}
            </Link>
          </div>

          <div>
            <div className="flex items-center justify-center mb-4 font-semibold md:justify-start text-[1.2rem]">
              <Link href="http://appsticit.com/">
              <div className="flex items-center justify-center gap-5">

              <Image 
                  src={AppsticitLogo}
                  alt="Appsticit"
                  width={50}
                  height={50}  
              />
              <span> Appsticit</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
