import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ManegRutineComponent from "@/src/Components/Dashboard/Rutine/ManegRutine/ManegRutine";

const ManegResult = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <div role="presentation" className="px-2 py-4 bg-neutral-100">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/dashboard"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Dashboard
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/dashboard/rutine/add-rutine"
                  className="commonBtn"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Add Rutine
            </Link>
          
          </Breadcrumbs>
        </div>
        <section>
          <ManegRutineComponent />
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default ManegResult;
