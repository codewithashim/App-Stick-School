import Image from "next/image";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <div className="grid grid-cols-4 text-white">
        <div className="p-4 col-span-3 flex items-start gap-3 ">  
            <Image
                src="https://www.jcesc.edu.bd/images/site/123.jpeg"
                alt="Description of the image"
                width={80} 
                height={80}
                style={{
                    borderRadius: '5px',
                }}/>

                <div className="">
                    <small className="text-[#e3e3e3]">Estd - 1987</small>
                    <h2 className="text-xl font-bold">Jalalabad Cantonment English School and College (JCESC)</h2>
                    <p className="text-[#e4e2e2] text-md">
                        Jalalabad Cantonment, Sylhet
                    </p>
                </div>
        </div>
        <div className=" ">
             {/* contact blog */}
             <div className="md:flex blog items-center justify-end gap-6">
                  <span className="flex items-center gap-3">
                      017363535353
                  </span>
                  <span className="flex items-center gap-3">
                      user@example.com
                  </span>
             </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
