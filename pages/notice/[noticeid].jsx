import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import NoticeDetailComponent from "@/src/Components/Notice/NoticeDetails";
import useNotice from "@/src/Hooks/useNotice";

const NoticeDetails = () => {
  const router = useRouter();
  const { noticeid } = router.query;
  const noticeId = noticeid;

  const {noticeData} = useNotice();

  const singelData = noticeData?.filter((notice) => notice?._id === noticeId);

  if (singelData?.length === 0) {
    return (
      <div>
        <p>Result not found</p>
        <Link href="/result">Back to Results</Link>
      </div>
    );
  }
  
  const result = singelData[0];



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

        <div className="my-4">
          <NoticeDetailComponent singelData={result} />
        </div>
      </section>
    </RootLayout>
  );
};

export default NoticeDetails;
