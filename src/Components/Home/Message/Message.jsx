import useTeachersData from "@/src/Hooks/useTeachersData";
import Image from "next/image";


const Message = () => {
  const { messageData } = useTeachersData();

  return (
    <section className="container">
      <div className="flex flex-row items-center justify-center gap-4">
        {messageData &&
          messageData?.map((message) => {
            return (
              <div className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full"
                    src={message?.image}
                    alt={message?.name}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800">
                    {message?.name} - {message?.position}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {message?.message?.slice(0,250)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Message;
