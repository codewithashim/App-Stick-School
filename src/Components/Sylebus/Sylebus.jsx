import { NoticeIcon } from "@/src/Assets";
import useSylebus from "@/src/Hooks/useSylebus";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";
const SylebusComponent = () => {
  const { SylebusData } = useSylebus();

  return (
    <section>
      <div className="border">
        <h1 className="text-[2rem] flex gap-4 items-center notice-container">
          <FaBuromobelexperte /> Sylebus
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          {SylebusData &&
            SylebusData?.map((Sylebus) => {
              return (
                <div className="flex items-center gap-6 p-4 my-4 border rounded">
                  <div className="notice-icons">
                    <Image src={NoticeIcon} alt={Sylebus?.title} />
                  </div>

                  <div>
                    <Link
                      href={`/sylebus/${Sylebus?._id}`}
                      className="text-[1.2rem] font-semibold mb-2 "
                    >
                      {Sylebus?.title}
                    </Link>
                    <p className="my-3 text-gray-800">
                      Publish Date {Sylebus?.pbulishDate}
                    </p>
                    <Link
                      href={`/sylebus/${Sylebus?._id}`}
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

export default SylebusComponent;
