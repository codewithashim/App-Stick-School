import React from "react";
import { OpctionData } from "./OpctionMockData";
import Image from "next/image";
import Link from "next/link";

const Options = () => {
  return (
    <section className="grid gap-4 md:grid-cols-4 option-containers">
      {OpctionData.map((opction, index) => {
        return (
          <Link
            href={opction.path}
            key={index}
            class="flex option-card w-full md:w-[11vw] m-2 flex-col rounded-xl bg-[#ccd0d4] bg-clip-border text-black shadow-md"
          >
            <div>
              <div class="p-6 flex justify-center items-center flex-col gap-4">
                <div className="icons">
                  <Image
                    src={opction.icon}
                    alt="Opctions"
                    width={50}
                    height={50}
                  />
                </div>

                <p class="mb-2 block leading-snug tracking-normal text-blue-gray-900 antialiased option-card-titiel">
                  {opction.title}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Options;
