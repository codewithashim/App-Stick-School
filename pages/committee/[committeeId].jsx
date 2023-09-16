import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import useCommittee from "@/src/Hooks/useCommittee";
import Image from "next/image";


const CommitteeDetails = () => {
  const router = useRouter();
  const {committeeId } = router.query;
  const CommitteeIds =committeeId;
  const {committeeData, } = useCommittee();

  const filteredCommittee =committeeData
    ? committeeData?.filter((Committee) =>Committee?._id === CommitteeIds)
    : [];

  if (filteredCommittee?.length === 0) {
    return (
      <div>
        <p>Committee not found</p>
        <Link href="/Committees">Back toCommittees</Link>
      </div>
    );
  }

  const CommitteeResult = filteredCommittee;

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
              href="/Committee"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Committee
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Committee Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {CommitteeResult ? (
            <section className="my-8">
              <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
                {CommitteeResult &&
                 CommitteeResult?.length &&
                 CommitteeResult?.map((Committee) => {
                    return (
                      <div key={Committee?._id}>
                        <Image
                          src={Committee?.image}
                          alt={Committee?.name}
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
                                        {Committee?.name}
                                      </td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                                        Position :
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {Committee?.position}
                                      </td>
                                    </tr>

                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                                        Detail :
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4">
                                        {Committee?.detail}
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

export default CommitteeDetails;
