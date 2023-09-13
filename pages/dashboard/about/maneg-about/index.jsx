import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs ,Typography} from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ManegAboutUsComponent from "@/src/Components/Dashboard/AboutUs/ManegAboutUs/ManegAboutUs";
import useAbout from "@/src/Hooks/useAbout";

const ManegAbout = () => {
  const {aboutData} = useAbout()

  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <div role="presentation" className="px-2 py-4 bg-neutral-100">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Dashboard
            </Link>
            {
              aboutData && aboutData?.length > 0 ? (
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Manage About
                </Typography>
              ) : (
                <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/dashboard/about/add-about"
              className="commonBtn"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Add About
            </Link>
              )
            }
            
            </Breadcrumbs>
        </div>
        <section className="my-4">
          <ManegAboutUsComponent/>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default ManegAbout;
