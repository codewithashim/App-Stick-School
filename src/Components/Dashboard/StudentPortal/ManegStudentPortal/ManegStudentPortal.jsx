import useStudentPortal from "@/src/Hooks/useStudentPortal";
import IconButton from "@mui/material/IconButton";
import { FaRegTrashAlt } from "react-icons/fa";

const ManegStudentPortal = () => {
    const {loading, handelStudentPortalDelete, studentPortalData } = useStudentPortal();

    return (
        <section>
             <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full text-sm font-light text-left">
                            <thead>
                            <tr className="border-b dark:border-neutral-500 text-[2rem]">
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                   Class
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  Action
                                </td>
                              </tr>      
                            </thead>

                            
                            <tbody>
                            {
                            studentPortalData && studentPortalData?.map((portal)=>{
                                return(
                                <tr className="border-b dark:border-neutral-500 text-[1.5rem]">
                                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {portal?.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    <IconButton aria-label="Delete" onClick={() => handelStudentPortalDelete(portal?._id)}>
                                    {
                                        loading ? "Loading..." :  <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
                                    }
                                    </IconButton>
                                    </td>
                                </tr>             
                                    )
                                })
                            }             
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
        </section>
    );
};

export default ManegStudentPortal;