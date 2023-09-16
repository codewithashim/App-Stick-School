import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import useCommittee from "@/src/Hooks/useCommittee";

const CommitteePage = () => {
  const { committeeData } = useCommittee();

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
              Committee
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="flex flex-col items-center justify-center my-6 title">
          <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
            Our Committee
          </h2>
          <div className="w-full h-1 bg-gray-500"></div>
        </div>
        <div className="my-4">
          <div className="grid gap-6 md:grid-cols-4 Committee-portal-container">
            {committeeData?.map((Committee) => {
              const { _id } = Committee;
              return (
                <Link href={`/committee/${_id}`}>
                  <div
                    className="max-w-sm my-4 overflow-hidden bg-white rounded-lg shadow-lg"
                    key={Committee?._id}
                  >
                    <img
                      className="object-cover object-center w-full h-56"
                      src={Committee.image}
                      alt="avatar"
                    />
                    <div className="px-6 py-4">
                      <h1 className="text-2xl font-semibold text-gray-800">
                        {Committee?.name}
                      </h1>
                      <p className="py-2 text-lg font-semibold text-gray-700">
                        {Committee?.position}
                      </p>
                      <p className="py-2 text-lg text-gray-700">
                        {Committee?.detail}
                      </p>
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

export default CommitteePage;
