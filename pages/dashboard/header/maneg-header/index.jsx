import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ManageHeaderComponent from "@/src/Components/Dashboard/Header/ManageHeader/ManageHeader";
import useHeadersData from "@/src/Hooks/useHeadersData";

const ManegHeader = () => {
  const {headersData} = useHeadersData()
  
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
            {
              headersData && headersData?.length > 0 ? (
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Manage Header
                </Typography>
              ) : (
                <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/dashboard/header/add-header"
              className="commonBtn"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Add Header
            </Link>
              )
            }
           
          </Breadcrumbs>
        </div>
        <section className="my-4">
          <ManageHeaderComponent/>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default ManegHeader;