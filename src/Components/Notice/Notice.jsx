import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaBuromobelexperte } from "react-icons/fa";
import { NoticeIcon } from "@/src/Assets";
import useNotice from "@/src/Hooks/useNotice";

const Notice = () => {
  const {noticeData} = useNotice();
  return (
    <section>
      <div className="border ">
        <h1 className="text-[2rem] flex gap-4 items-center notice-container">
          <FaBuromobelexperte /> Notice
        </h1>

        <div className="grid gap-4 m-4 md:grid-cols-2 justify-items-center">
        {noticeData &&
          noticeData?.map((notice) => {
            return (
              <div className="flex items-center w-full gap-6 p-4 m-4 rounded shadow bg-slate-50">
                <div className="notice-icons">
                  <Image src={NoticeIcon} alt={notice?.title} />
                </div>
                <div>
                  <Link
                    href={`/notice/${notice?._id}`}
                    className="text-[1.2rem] font-semibold mb-2 text-black"
                  >
                    {notice?.title}
                  </Link>
                  <p className="my-3 text-gray-600">{notice?.pbulishDate}</p>
                  <Link
                    href={`/notice/${notice?._id}`}
                    className="text-blue-500 text-[1.2rem]"
                  >
                    {" "}
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      </div>
    </section>
  );
};

export default Notice;
