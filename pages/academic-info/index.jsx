import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import About from "@/src/Shared/About/About";

const AcademicInfoPage = () => {
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
           Academic Info
          </Typography>
        </Breadcrumbs>
      </div>

      <div> 
        <About/>
      </div>

      </section>
    </RootLayout>
  );
};

export default AcademicInfoPage;
