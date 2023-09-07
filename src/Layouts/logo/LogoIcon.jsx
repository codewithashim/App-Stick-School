import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/src/Assets";
import useHeadersData from "@/src/Hooks/useHeadersData";

const LogoIcon = () => {
  const {headersData} = useHeadersData()

  return (
    <Link href="/" className="flex items-center justify-center">
    {
      headersData?.map((header)=>{
        return(     
      <Image key={header?._id} src={header.logo} alt={Logo} width={150} height={100} />
        )
      })
    }
    </Link>
  );
};

export default LogoIcon;
