import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { notices } from "./HomeNoticeMockData";

const HomeNotice = () => {

  return (
    <section>
      <div className="container">
        <div className="p-4 mx-auto bg-white rounded-md shadow-md md:w-4/6">
          <div className="notice-container">
            <h2 className="flex items-center justify-center gap-4 text-xl font-bold">
              <FaQuoteLeft /> Notice Section
            </h2>
          </div>
          <div className="overflow-y-scroll h-[22vw]">
            {notices.map((notice, index) => (
              <div key={index} className="mb-2">
                <div className="p-2 bg-blue-100 rounded-md">
                  <div className="flex gap-2 text-blue-700">
                    <p className="w-[0.5rem] bg-red-400 h-[4.5rem]"></p>
                    {notice}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNotice;
