import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import useStaff from "@/src/Hooks/useStaff";
import Image from "next/image";


const StaffDetails = () => {
  const router = useRouter();
  const { staffId } = router.query;
  const StaffIds = staffId;
  const { staffData } = useStaff();

  const filteredStaff = staffData
    ? staffData?.filter((Staff) => Staff?._id === StaffIds)
    : [];

  if (filteredStaff?.length === 0) {
    return (
      <div>
        <p>Staff not found</p>
        <Link href="/Staffs">Back to Staffs</Link>
      </div>
    );
  }

  const StaffResult = filteredStaff;

  return (
    <RootLayout>
      <section className="container">
        <div role="presentation" className="px-2 py-4 bg-neutral-100">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>

            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/Staff"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Staff
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Staff Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {StaffResult ? (
            <section className="my-8">
              <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
                {StaffResult &&
                  StaffResult?.length &&
                  StaffResult?.map((staff) => {
                    return (
                      <div key={staff?._id}>
                        <Image
                          src={staff?.image}
                          alt={staff?.name}
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
                                        {staff?.name}
                                      </td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                                        Joining Date :
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {staff?.joiningDate}
                                      </td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                                        Position :
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {staff?.position}
                                      </td>
                                    </tr>

                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                                        Detail :
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {staff?.detail}
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
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default StaffDetails;
