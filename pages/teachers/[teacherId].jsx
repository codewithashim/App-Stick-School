import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import useTeachersData from "@/src/Hooks/useTeachersData";
import TeacherDetailsComponent from "@/src/Components/TeachersPortal/TeacherDetail";

const TeacherDetails = () => {
  const router = useRouter();
  const { teacherId } = router.query;
  const TeacherId = teacherId;
  const { teacherData } = useTeachersData();

  const filteredTeacher = teacherData? teacherData?.filter((teacher) => teacher?._id === TeacherId) : [];

  if (filteredTeacher?.length === 0) {
    return (
      <div>
        <p>Teacher not found</p>
        <Link href="/teachers">Back to Teachers</Link>
      </div>
    );
  }

  const TeacherResult = filteredTeacher;

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
              href="/teacher"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Teacher
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Teacher Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {TeacherResult ? (
            <div className="my-4">
              <TeacherDetailsComponent TeacherDetailData={TeacherResult} />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default TeacherDetails;
