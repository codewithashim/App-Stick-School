import { NoticeIcon, classIcon } from "@/src/Assets";
import useStatistic from "@/src/Hooks/useStatistic";
import React from "react";

const StatisticsOrganization = () => {
  const { organizationStatistic } = useStatistic();
  const titleToIconMapping = {
    Classes:
      "https://res.cloudinary.com/appsticit/image/upload/v1694869518/AppsticitSchool/Icons-statitce/rps5t5ls6zlnyjoyrywr.png",
    Students:
      "https://res.cloudinary.com/appsticit/image/upload/v1694869518/AppsticitSchool/Icons-statitce/liv77ec3gwjyjbpdfnil.png",
    Staff:
      "https://res.cloudinary.com/appsticit/image/upload/v1694869517/AppsticitSchool/Icons-statitce/oxnshmb23w16qpzetrtl.png",
    Teachers:
      "https://res.cloudinary.com/appsticit/image/upload/v1694869517/AppsticitSchool/Icons-statitce/vvi5hd46vbx2iqwnpd3o.png",
  };

  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center gap-10 justify-around md:flex-row organigection-statice-content mt-[2rem]">
          {organizationStatistic &&
            organizationStatistic?.slice(0, 4)?.map((item) => {
              return (
                <div
                  className="flex flex-col items-center justify-center pointer"
                  key={item?._id}
                >
                  {titleToIconMapping[item?.title] && (
                    <img
                      src={titleToIconMapping[item?.title]}
                      alt={item?.title}
                      className="w-[8rem] h-[8rem]"
                    />
                  )}
                  <h2 className="font-bold mb-1 text-[2.6rem]">
                    {item?.counte}
                  </h2>
                  <h4 className="text-[1.2rem]">{item?.title}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsOrganization;
