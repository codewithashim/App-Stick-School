import React from 'react';
import Image from "next/image";

const TeacherDetailsComponent = ({TeacherDetailData}) => {
    return (
        <section className="my-8">
        <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
          {TeacherDetailData &&
            TeacherDetailData?.length &&
            TeacherDetailData?.map((teacher) => {
              return (
                <div key={teacher?._id}>
                  <Image
                    src={teacher?.image}
                    alt={teacher?.name}
                    width={500}
                    height={500}
                  />
                  <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full text-left text-sm font-light">
                            <tbody>
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                 Name :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.name}
                                </td>
                              </tr>
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Joining Date :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.joiningDate}
                                </td>
                              </tr>
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Position :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.position}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Index No :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.indexNo}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Qualification :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.qualification}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Subject :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.subject}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                               Phone :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.phone}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  Email :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.email}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Present Address :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.presentAddress}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Permanent Address :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.permanentAddress}
                                </td>
                              </tr>

                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                Detail :
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {teacher?.detail}
                                </td>
                              </tr>

                            
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
};

export default TeacherDetailsComponent;