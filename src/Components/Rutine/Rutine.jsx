import { NoticeIcon } from "@/src/Assets";
import useRutine from "@/src/Hooks/useRutine";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBuromobelexperte } from "react-icons/fa";
const RutineComponent = () => {
  const { RutineData } = useRutine();

  return (
    <section>
      <div className="border">
        <h1 className="text-[2rem] flex gap-4 items-center notice-container">
          <FaBuromobelexperte /> Rutine
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          {RutineData &&
            RutineData?.map((Rutine) => {
              return (
                <div className="flex items-center gap-6 p-4 my-4 border rounded">
                  <div className="notice-icons">
                    <Image src={NoticeIcon} alt={Rutine?.title} />
                  </div>

                  <div>
                    <Link
                      href={`/rutine/${Rutine?._id}`}
                      className="text-[1.2rem] font-semibold mb-2 "
                    >
                      {Rutine?.title}
                    </Link>
                    <p className="my-3 text-gray-800">
                      Publish Date {Rutine?.pbulishDate}
                    </p>
                    <Link
                      href={`/rutine/${Rutine?._id}`}
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

export default RutineComponent;
