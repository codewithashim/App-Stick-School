import React, {useState} from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import useHeadersData from "@/src/Hooks/useHeadersData";
import ManegFooter from "@/src/Components/Dashboard/Footer/ManegFooter/ManegFooter";
import useFooter from "@/src/Hooks/useFooter";
import CreateLink from "@/src/Shared/Modals/CreateLink";

const ManegFooterPage = () => {
  const {footerData} = useFooter()
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
              href="/dashboard"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Dashboard
            </Link>
            {
              footerData && footerData?.length > 0 ? (
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Manage Footer
                </Typography>
              ) : (
                <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/dashboard/footer/add-footer"
              className="commonBtn"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Add Footer
            </Link>
              )
            }
            <button 
              className="commonBtn"
             onClick={() => setOpen(true)}>
            Create Link
           </button>
          </Breadcrumbs>
        </div>
        <section className="my-4">
          <ManegFooter/>
        </section>

        <CreateLink
          open={open} 
          setOpen={setOpen}
        />
      </FullLayout>
    </ThemeProvider>
  );
};

export default ManegFooterPage;