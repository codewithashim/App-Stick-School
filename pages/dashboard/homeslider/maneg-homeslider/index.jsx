import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import ManageHomeSlider from "@/src/Components/Dashboard/HomeSlider/ManageHomeSlider/ManageHomeSlider";

const Index = () => {
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

            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/dashboard/homeslider/add-homeslider"
              className="commonBtn"
            >
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Add Home Slider
              </Typography>
            </Link>
          </Breadcrumbs>
        </div>
        <section>
          <ManageHomeSlider />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Index;
