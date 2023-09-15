import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { FaPen } from "react-icons/fa";
import AddMessage from "@/src/Components/Dashboard/Message/AddMessage/AddMessage";

const AddMessagePage = () => {
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
                href="/dashboard/message/maneg-message"
              >
                <Typography
                  color="text.primary"
                  className="flex items-center justify-center gap-2 rounded hover:bg-black-700"
                >
                  <FaPen></FaPen> Manage Message
                </Typography>
              </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
               Add Message
            </Typography>
          </Breadcrumbs>
        </div>
        <section>
          <AddMessage/>
        </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default AddMessagePage;
