import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import { NoticeIcon } from "@/src/Assets";
import { FaBuromobelexperte } from "react-icons/fa";
import useStudentPortal from "@/src/Hooks/useStudentPortal";


const StudentRutinePage = () => {
    const router = useRouter();
    const { studentPortalId} = router.query;
    const {studentPortalData } = useStudentPortal();

    const filteredStudentPortal = studentPortalData
    ? studentPortalData?.filter((student) => student?._id === studentPortalId)
    : [];

  if (filteredStudentPortal?.length === 0) {
    return (
      <div>
        <p>Rutine not found</p>
        <Link href="/student">Back to Student</Link>
      </div>
    );
  }
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
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Rutine
            </Typography>
          </Breadcrumbs>
        </div>
  
        <div className="flex flex-col items-center justify-center my-6 title">
            <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
            Rutine
            </h2>
            <div className="w-full h-1 my-2 bg-gray-500"></div>
          </div>
  
          <section className="my-4">
            <div className="border">
                <h1 className="text-[2rem] flex gap-4 items-center notice-container">
                <FaBuromobelexperte /> Rutine
                </h1>

                <div className="grid gap-4 md:grid-cols-2">
                {filteredStudentPortal &&
                    filteredStudentPortal[0]?.rutine?.map((result) => {
                    return (
                        <div className="flex items-center gap-6 p-4 my-4 border rounded">
                        <div className="notice-icons">
                            <Image src={NoticeIcon} alt={result?.title} />
                        </div>

                        <div>
                            <Link
                            href={`/rutine/${result?._id}`}
                            className="text-[1.2rem] font-semibold mb-2 "
                            >
                            {result?.title}
                            </Link>
                            <p className="my-3 text-gray-800">
                            Publish Date {result?.pbulishDate}
                            </p>
                            <Link
                            href={`/rutine/${result?._id}`}
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
        </section>
      </RootLayout>
    );
};

export default StudentRutinePage;