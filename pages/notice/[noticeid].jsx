import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import { NoticeData } from "@/src/Utils/MockData/NoticeMockData";

const NoticeDetails = () => {
    const router = useRouter();
    const { noticeid } = router.query;
    const noticeId = noticeid;  
    
    const singelData = NoticeData?.filter(notice=>notice.id === noticeId)

    console.log(NoticeData)
    
    console.log(singelData, "noticeDetails ")


  return (
    <RootLayout>
      <section className="container">
        <div role="presentation" className="px-2 py-4 bg-neutral-100">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>    

            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/notice"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Notice
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Notice Details 
            </Typography>
          </Breadcrumbs>
        </div>


        
      </section>
    </RootLayout>
  );
};

export default NoticeDetails;
