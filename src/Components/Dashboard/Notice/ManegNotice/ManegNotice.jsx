import React from "react";
import ManegNoticeCard from "./ManegNoticeCard";
import useNotice from "@/src/Hooks/useNotice";

const ManegNoticeComponent = () => {
  const { noticeData } =useNotice();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Notice</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {noticeData &&
          noticeData?.length &&
          noticeData?.map((notice) => {
            return <ManegNoticeCard key={notice?._id} notice={notice} />;
          })}
      </div>
    </section>
  );
};

export default ManegNoticeComponent;
