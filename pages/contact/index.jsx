import RootLayout from "@/src/Layouts/RootLayout";
import Contact from "@/src/Shared/Contact/Contact";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

const ContactPage = () => {
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
            Contact Us
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="my-6 title">
          <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
            CONTACT WITH US
          </h2>
        </div>
        <div  > 
        <Contact/>
        </div>
      </section>
    </RootLayout>
  );
};

export default ContactPage;
