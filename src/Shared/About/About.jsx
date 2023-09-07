import useAbout from "@/src/Hooks/useAbout";
import React from "react";

const About = () => {
  const {aboutData} = useAbout()

  return (
    <section className="about-container">
      <div className="container">
        {aboutData?.map((data) => {
          return (
            <div key={data?._id}>
              <p className=" text-center text-[1.5rem]">{data?.title}</p>

              <div className="about-content">
                <h1 className="text-[#0075d6] text-[1.8rem] my-4 text-center">
                  {data?.details}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
