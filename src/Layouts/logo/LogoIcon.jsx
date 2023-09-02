import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/src/Assets";

const LogoIcon = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image src={Logo} alt={Logo} width={150} height={100} />
    </Link>
  );
};

export default LogoIcon;
