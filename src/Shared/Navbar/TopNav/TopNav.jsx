import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { Logo } from "@/src/Assets";
import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="p-1 ">
      <div className="grid-cols-4 text-white md:grid">
        <div className="items-start col-span-3 gap-3 md:flex">  
            <Image
                className="m-auto md:m-0"
                src={Logo}
                alt="Description of the image"
                width={80} 
                height={80}
                style={{
                    borderRadius: '5px',
                }}/>

                <div className="text-center md:text-start">
                    <small className="text-[#e3e3e3]">Estd - 1987</small>
                    <h2 className="text-xl font-bold">Jalalabad Cantonment English School and College (JCESC)</h2>
                    <p className="text-[#e4e2e2] text-md">
                        Jalalabad Cantonment, Sylhet
                    </p>
                </div>
        </div>
        <div className="">
             {/* contact blog */}
             <div className="items-center justify-center gap-6 md:flex blog md:justify-end">
                  <span className="flex items-center justify-center gap-2 text-center md:justify-start">
                    <IoMdCall />  01740737445
                  </span>
                  <span className="flex items-center justify-center gap-2 md:justify-start">
                    <HiMail />  user@example.com
                  </span>
             </div>

             {/* social icons buttons */}
             <div className="flex items-center justify-center gap-3 mt-1 md:justify-end">
                 <button className="w-[35px] h-[35px] bg-[#0000007b] flex items-center justify-center rounded-full ">
                    <BiLogoFacebook className="text-xl" />
                 </button>
                 <button className="w-[35px] h-[35px] bg-[#0000007b] flex items-center justify-center rounded-full ">
                    <BiLogoTwitter className="text-xl" />
                 </button>
                 <button className="w-[35px] h-[35px] bg-[#0000007b] flex items-center justify-center rounded-full ">
                    <BiLogoLinkedin className="text-xl" />
                 </button>
             </div>
             
             {/* action button */}
             <div className="flex items-center justify-center gap-2 mt-2 md:justify-end">
                  {/* <button className="btn bg-[#124358] px-5 py-1 rounded-md">বাংলা</button> */}
             
                  <Link href="/auth/login" className="btn bg-[#124358] px-4 py-1 rounded-md">Login</Link>
             </div>

        </div>
      </div>
    </nav>
  );
};

export default TopNav;
