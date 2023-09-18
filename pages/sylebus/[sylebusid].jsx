import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import SylebusDetailsComponent from "@/src/Components/Sylebus/SylebusDetails";
import useSylebus from "@/src/Hooks/useSylebus";

const SylebusDetails = () => {
  const router = useRouter();
  const { Sylebusid } = router.query;
  const SylebusId = Sylebusid;
  const { SylebusData } = useSylebus();

  const filteredSylebus = SylebusData? SylebusData?.filter((notice) => notice?._id === SylebusId) : [];

  if (filteredSylebus?.length === 0) {
    return (
      <div>
        <p>Sylebus not found</p>
        <Link href="/Sylebus">Back to Sylebuss</Link>
      </div>
    );
  }

  const Sylebus = filteredSylebus[0];

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
              href="/sylebus"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Sylebus
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Sylebus Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {Sylebus ? (
            <div className="my-4">
              <SylebusDetailsComponent SylebusDetailData={Sylebus} />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default SylebusDetails;
