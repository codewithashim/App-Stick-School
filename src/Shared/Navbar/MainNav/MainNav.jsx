import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const MainNav = () => {
  return (
    <nav className=" p-1">
      <div className="md:grid grid-cols-4 text-white">
        <div className=" col-span-3 md:flex items-start gap-3 ">  
            <Image
                className="md:m-0 m-auto"
                src="https://www.jcesc.edu.bd/images/site/123.jpeg"
                alt="Description of the image"
                width={80} 
                height={80}
                style={{
                    borderRadius: '5px',
                }}/>

                <div className="md:text-start text-center">
                    <small className="text-[#e3e3e3]">Estd - 1987</small>
                    <h2 className="text-xl font-bold">Jalalabad Cantonment English School and College (JCESC)</h2>
                    <p className="text-[#e4e2e2] text-md">
                        Jalalabad Cantonment, Sylhet
                    </p>
                </div>
        </div>
        <div className=" ">
             {/* contact blog */}
             <div className="md:flex blog items-center md:justify-end justify-center gap-6">
                  <span className="flex md:justify-start justify-center text-center items-center gap-2">
                    <IoMdCall />  017363535353
                  </span>
                  <span className="flex md:justify-start justify-center items-center gap-2">
                    <HiMail />  user@example.com
                  </span>
             </div>

             {/* social icons buttons */}
             <div className="flex gap-3 items-center md:justify-end justify-center mt-1">
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
             <div className="flex items-center md:justify-end justify-center gap-2 mt-2">
                  <button className="btn bg-[#124358] px-5 py-1 rounded-md">বাংলা</button>
             
                  <button className="btn bg-[#124358] px-4 py-1 rounded-md">Apply Online</button>
             </div>

        </div>
      </div>
    </nav>
  );
};

export default MainNav;
