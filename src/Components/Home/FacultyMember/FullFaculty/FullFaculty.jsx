import React from "react";
import useTeachersData from "@/src/Hooks/useTeachersData";
import Link from "next/link";
;

const FullFaculty = () => {
const {teacherData} = useTeachersData()

  return (
    <section className="bg-white rounded shadow home-faculty-section ">
      <div className="grid items-center w-full gap-4 p-4 md:grid-cols-4">
        {teacherData?.slice(0, 8).map((faculty) => {
          return (
            <div className="flex flex-col justify-center w-full p-4 text-center bg-gray-100 shadow">
              <img
                alt="Faculty"
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={faculty.image}
              />
              <p className="text-xl font-semibold leadi">{faculty.name}</p>
              <p className="dark:text-gray-400">{faculty.position}</p>
            </div>
          );
        })}
      </div>
      <div className="my-2 morebutton flex justify-center items-center">
          <Link href="/teachers" className="text-center text-blue-500"> More..</Link>
        </div>
    </section>
  );
};

export default FullFaculty;
