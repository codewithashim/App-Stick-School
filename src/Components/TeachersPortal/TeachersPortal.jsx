import { FacultyData } from "@/src/Utils/MockData/FacultyMockData";
import React from "react";

const TeachersPortal = () => {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-4 teacher-portal-container">
        {FacultyData.map((teacher) => {
          return (
            <div className="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="object-cover object-center w-full h-56"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <div className="px-6 py-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {teacher?.name}
                </h1>
                <p className="py-2 text-lg font-semibold text-gray-700">
                  {teacher?.designation}
                </p>
                <p className="py-2 text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam nihil ut quis dolores, alias minus.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeachersPortal;
