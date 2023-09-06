import React from "react";
import useAbout from "@/src/Hooks/useAbout";
import ManageAboutCard from "./ManegAboutCard";

const ManegAboutUsComponent = () => {
  const { aboutData } = useAbout();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage About</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {aboutData &&
          aboutData?.length &&
          aboutData?.map((about) => {
            return <ManageAboutCard key={about?._id} about={about} />;
          })}
      </div>
    </section>
  );
};

export default ManegAboutUsComponent;
