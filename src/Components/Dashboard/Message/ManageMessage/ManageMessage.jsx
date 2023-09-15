import React from "react";
import useTeacherData from "@/src/Hooks/useTeachersData";
import ManageMessageCard from "./ManageMessageCard";

const ManageMessageComponent = () => {
  const { messageData } = useTeacherData() 

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Message</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {messageData &&
          messageData?.length &&
          messageData?.map((message) => {
            return <ManageMessageCard key={message?._id} messageData={message} />;
          })}
      </div>
    </section>
  );
};

export default ManageMessageComponent;
