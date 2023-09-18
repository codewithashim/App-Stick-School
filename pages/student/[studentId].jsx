import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import Image from "next/image";
import { Card } from "antd";
import useStudentPortal from "@/src/Hooks/useStudentPortal";


const StudentPortalDetails = () => {
  const router = useRouter();
  const { studentId } = router.query;
  const { studentPortalData } = useStudentPortal();

  const filteredStudentPortal = studentPortalData
    ? studentPortalData?.filter((student) => student?._id === studentId)
    : [];

  if (filteredStudentPortal?.length === 0) {
    return (
      <div>
        <p>Student not found</p>
        <Link href="/student">Back to Student</Link>
      </div>
    );
  }

  const studentPortalList = [
    {
      id: 1,
      title: "Result",
      linkTitle: "result",
      folderPath: "result", 
      link: "result",
      icon: "https://res.cloudinary.com/codewithashim/image/upload/v1693606158/ApstickSchool/Icons/ch4brttc4xvfbo7rbmg9.png",
    },
    {
      id: 2,
      title: "Rutine",
      linkTitle: "rutine",
      folderPath: "rutine", 
      link: "rutine",
      icon: "https://res.cloudinary.com/codewithashim/image/upload/v1693606158/ApstickSchool/Icons/ch4brttc4xvfbo7rbmg9.png",
    },
    {
      id: 3,
      title: "Sylebus",
      linkTitle: "sylebus",
      folderPath: "sylebus", 
      link: "sylebus",
      icon: "https://res.cloudinary.com/codewithashim/image/upload/v1693606158/ApstickSchool/Icons/ch4brttc4xvfbo7rbmg9.png",
    }
  ]

  console.log(filteredStudentPortal , "filteredStudentPortal")

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
              href="/student"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Student
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Student Portal Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {filteredStudentPortal ? (
            <section className="my-8">
              <div className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
              <h1 className="text-[1.5rem] font-bold">{filteredStudentPortal[0].title}</h1>
              <div className="my-2 border"></div>
              <div className="flex flex-wrap items-center justify-center gap-6">
              {studentPortalList && studentPortalList?.map((opction, index) => {
                return (
                  <Link
                    href={`/student/${opction?.folderPath}/${opction?.linkTitle}?studentPortalId=${filteredStudentPortal[0]?._id}`}
                    key={index}
                  >
                    <Card
                      bordered={true}
                      style={{
                        width: 300,
                        borderRadius: 10,
                      }} 
                    >
                      <div className="flex flex-col items-center justify-center gap-4">
                      <Image
                        src={opction?.icon}
                        alt="Opctions"
                        width={50}
                        height={50}
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

export default StudentPortalDetails;
