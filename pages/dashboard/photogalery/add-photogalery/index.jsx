import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import AddPhotoGelary from "@/src/Components/Dashboard/PhotoGelary/AddPhotoGelary/AddPhotoGelary";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import CeateAlbum from "@/src/Shared/Modals/CeateAlbum";
import { Button} from 'antd';

const Index = () => {
  const [open, setOpen] = useState(false);

  
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

            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Add Photo Galary
            </Typography>
            <button 
              className="commonBtn"
             onClick={() => setOpen(true)}>
            Create Album 
           </button>
          </Breadcrumbs>
        </div>
        <section>
          <AddPhotoGelary />
        </section>
      </FullLayout>
      <CeateAlbum
        open={open}
        setOpen={setOpen}
      />
    </ThemeProvider>
  );
};

export default Index;
