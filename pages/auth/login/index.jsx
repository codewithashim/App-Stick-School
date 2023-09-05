
import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { UsersignUp } from "@/src/Assets";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const baseUrl = 'localhost'
  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const router = useRouter();

  const redirect = router.query.redirect;

  const onSubmit = async (data) => {
    
  };

  return (
    <RootLayout>
        <div className="container mt-10">
          <div className="relative  lg:mt-[-35px] h-8 bg-white"></div>
          <div className="w-full bg-white md:py-20 md:px-16">
            <div className="grid-cols-12 gap-4 md:grid">
              <div className="items-center justify-center col-span-5 lg:flex xxs:hidden">
                <Image className="" src={UsersignUp} alt="userLogin" />
              </div>
              <div className="col-span-7 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6">
                <div className="my-3 xs:mx-[40px] xxs:mx-[10px]">
                  <div className="w-4/5 pt-5 mx-auto">
                    <h2 className="py-5 text-[#5E5E5E] text-xl font-bold text-center">
                      Sign In
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-6">
                      <span className="text-[#ddd] text-[20px] absolute  top-[15px] inset-y-0 left-0 pl-3 flex">
                        <FaUser />
                      </span>
                      <div className="w-full">
                        <input
                          type="email"
                          className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                          placeholder="Email"
                          name="email"
                          {...register("email")}
                          required
                        />
                      </div>
                      <span className="text-[#6B7280] text-[20px] absolute top-[15px] inset-y-0 right-0 pr-3 flex">
                        <FaQuestionCircle />
                      </span>
                    </div>
                    <div className="relative mb-6">
                      <span className="text-[#ddd] text-[20px] absolute top-[15px] inset-y-0 left-0 pl-3 flex">
                        <FaLock />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3 "
                        placeholder="Password"
                        name="password"
                        {...register("password")}
                      />

                      <span
                        className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-0 pr-3 flex"
                        onClick={passwordVisible}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center mb-4 md:flex-row xxs:flex-col xxs:justify-center md:justify-between ">
                      <div className="flex items-center ">
                        <div className="mr-2">
                          <input id="remember" type="checkbox" />
                        </div>{" "}
                        <label htmlFor="remember">Remember me</label>
                      </div>
                      <span className="text-[15px] text-[#676767] float-right">
                        <Link href="/">Forgot password</Link>
                      </span>
                    </div>
                    <div className="flex items-center mb-4 md:justify-between md:flex-row xxs:flex-col xxs:justify-center">
                      <div className="relative py-3 xs:flex-row xxs:flex-col xs:block xxs:flex xxs:text-center xs:text-left">
                        <span className="text-[15px] text-[#676767]">
                          You don't have account
                          <Link href="/auth/register" className="font-bold">
                            {" "}
                            Signup Now
                          </Link>
                        </span>
                      </div>
                      <button className="mb-5 commonBtn">Sign In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </RootLayout>
  );
};

export default LoginPage;