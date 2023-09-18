import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ManegStudentPortal from "@/src/Components/Dashboard/StudentPortal/ManegStudentPortal/ManegStudentPortal";

const ManegStudentPortalPage = () => {
    return (
        <ThemeProvider theme={theme}>
        <FullLayout>
          <div
            role="presentation"
            className="flex items-center px-2 py-4 bg-neutral-100"
          >
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
                href="/dashboard/studentportal/add-studentportal"
                className="commonBtn"
              >
                Add Student Portal
              </Link>
            </Breadcrumbs>
          </div>
          <section>
            <ManegStudentPortal/>
          </section>
        </FullLayout>
      </ThemeProvider>
    );
};

export default ManegStudentPortalPage;