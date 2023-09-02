import Image from "next/image";
import Link from "next/link";
import React from "react";

const Principal = () => {
  return (
    <section className="home-principul-section">
      <div className=" px-8 py-4 bg-[#3498db] rounded-lg shadow-lg">
        <div className="flex justify-center">
          <Image
            className="border-indigo-500 rounded-full"
            src="https://res.cloudinary.com/codewithashim/image/upload/v1693613128/ApstickSchool/di1duyuhaq9v2xhnvnhq.webp"
            alt="Profile"
            width={150}
                height={150}   
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
          MIJANUR RAHMAN CHOWDHURY
          </h2>
          <h4>Principal</h4>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            voluptates.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Link href="#" className="text-xl font-medium text-white">
           More..
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Principal;
