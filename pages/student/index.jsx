import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import useStudentPortal from "@/src/Hooks/useStudentPortal";

const StudentPortal = () => {
  const {studentPortalData } = useStudentPortal();



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
            Student
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="flex flex-col items-center justify-center my-6 title">
          <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
           Student Portal
          </h2>
          <div className="w-full h-1 bg-gray-500"></div>
        </div>
        <div className="my-4">
          <div className="grid gap-6 md:grid-cols-4">
            {studentPortalData?.map((student) => {
              const { _id } = student;
              return (
                <Link href={`/student/${_id}`}>
                  <div
                    className="flex flex-col items-center justify-center max-w-sm my-4 bg-white rounded-lg shadow-lg "
                    key={student?._id}
                  >
                    <img
                      className="object-cover object-center w-20 h-20"
                      src="https://res.cloudinary.com/appsticit/image/upload/v1694869518/AppsticitSchool/Icons-statitce/rps5t5ls6zlnyjoyrywr.png"
                      alt="avatar"
                    />
                    <div className="px-6 py-4">
                      <h1 className="text-2xl font-semibold text-gray-800">
                        {student?.title}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default StudentPortal;
