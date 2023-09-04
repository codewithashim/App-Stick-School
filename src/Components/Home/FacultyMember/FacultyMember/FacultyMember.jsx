import React from "react";
import Principal from "../Principal/Principal";
import FullFaculty from "../FullFaculty/FullFaculty";

const FacultyMember = () => {
  return (
    <section className="home-faculty-containers">
      <div className="container">
      <h2 className="title-content ">Faculty Members</h2>
        <div className="flex flex-col gap-4 mt-[3rem] jus home-faculty-content md:flex-row">
            <Principal />
            <FullFaculty />
        </div>
      </div>
    </section>
  );
};

export default FacultyMember;
