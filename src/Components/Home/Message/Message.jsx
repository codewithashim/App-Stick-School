import useTeachersData from "@/src/Hooks/useTeachersData";
import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";

const Message = () => {
  const { messageData } = useTeachersData();

  return (
    <section className="container">
      <div className="flex flex-row items-center justify-center gap-4">
        {messageData &&
          messageData?.map((message) => {
            return (
              <div className="flex flex-row items-center justify-center w-full gap-4 md:flex-col">
                <img
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                  src={message?.image}
                  alt={message?.name}
                />
                <h1 class="text-blue-gray-900  text-[1.5rem]">
                  {message?.name} - {message?.position}
                </h1>
                <p class="text-[1rem] text-center">{message?.message}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Message;
