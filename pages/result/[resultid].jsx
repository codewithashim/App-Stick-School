import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import { NoticeData } from "@/src/Utils/MockData/NoticeMockData";
import ResultDetailsComponent from "@/src/Components/Result/ResultDetails";
import { useQuery } from "@tanstack/react-query";
import { getResultByIdUrl } from "@/src/Utils/Urls/ResultUrl";

const ResultDetails = () => {
    const router = useRouter();
    const {resultid } = router.query;
    const resultId = resultid;  

    const {
      data: resultDetailData,
      isLoading: resultDetailLoaded,
      refetch: refetchResultDetail,
    } = useQuery({
      queryKey: ["resultDetailData"],
      queryFn: async () => {
        const res = await fetch(getResultByIdUrl(resultId));
        const data = await res.json();
        return data?.data;
      },
    });


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
              href="/result"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Result
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Result Details 
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          <ResultDetailsComponent resultDetailData={resultDetailData}/>
        </div>

        
      </section>
    </RootLayout>
  );
};

export default ResultDetails;
