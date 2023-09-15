import React from "react";
import { OpctionData } from "./OpctionMockData";
import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";

const Options = () => {
  return (
    <section className="container">
      <div className="flex flex-wrap items-center justify-center gap-6">
      {OpctionData.map((opction, index) => {
        return (
          <Link
            href={opction.path}
            key={index}
          >
            <Card
              bordered={true}
              style={{
                width: 350,
                borderRadius: 10,
              }} 
            >
              <div className="flex flex-col items-center justify-center gap-4">
              <Image
                    src={opction.icon}
                    alt="Opctions"
                    width={60}
                    height={60}
                  />
       <h1 class="mb-2  text-blue-gray-900  text-[2.1rem]">
                  {opction.title}
                </h1>
              </div>
            </Card>
          </Link>
        );
      })}
      </div>
    </section>
  );
};

export default Options;
