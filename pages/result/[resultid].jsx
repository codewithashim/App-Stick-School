import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import ResultDetailsComponent from "@/src/Components/Result/ResultDetails";
import useResult from "@/src/Hooks/useResult";

const ResultDetails = () => {
  const router = useRouter();
  const { resultid } = router.query;
  const resultId = resultid;
  const { resultData } = useResult();

  const filteredResult = resultData?.filter((result) => result?._id === resultId);

  if (filteredResult?.length === 0) {
    return (
      <div>
        <p>Result not found</p>
        <Link href="/result">Back to Results</Link>
      </div>
    );
  }

  const result = filteredResult[0];

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
          {result ? (
            <div className="my-4">
              <ResultDetailsComponent resultDetailData={result} />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default ResultDetails;
