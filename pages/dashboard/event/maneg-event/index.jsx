import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ManegEventComponent from "@/src/Components/Dashboard/Event/ManegEvent/ManegEvent";

const ManegEvent = () => {
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
              className="commonBtn"
              href="/dashboard/event/add-event"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Add Event
            </Link>
          </Breadcrumbs>
        </div>
        <section>
          <ManegEventComponent/>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default ManegEvent;
