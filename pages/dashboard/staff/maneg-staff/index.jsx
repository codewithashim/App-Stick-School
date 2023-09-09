import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ManegStaff from "@/src/Components/Dashboard/Staff/ManegStaff/ManegStaff";

const ManegStaffPage = () => {
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
              href="/dashboard/staff/add-staff"
              className="commonBtn"
            >
              Add Staff
            </Link>
          </Breadcrumbs>
        </div>
        <section>
          <ManegStaff/>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default ManegStaffPage;
