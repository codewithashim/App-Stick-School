import { FacultyData } from "@/src/Utils/MockData/FacultyMockData";
import React from "react";

const FullFaculty = () => {
  return (
    <section className="home-faculty-section">
      <div className="grid items-center w-full gap-4 p-4 bg-white rounded shadow md:grid-cols-4">
        {FacultyData.slice(0, 8).map((faculty) => {
          return (
            <div className="flex flex-col justify-center w-full p-4 text-center bg-gray-100 shadow">
              <img
                alt="Faculty"
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={faculty.image}
              />
              <p className="text-xl font-semibold leadi">{faculty.name}</p>
              <p className="dark:text-gray-400">{faculty.designation}</p>
            </div>
          );
        })}
        <div className="morebutton">
          
        </div>
      </div>
    </section>
  );
};

export default FullFaculty;
