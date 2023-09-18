import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import RutineDetailsComponent from "@/src/Components/Rutine/RutineDetails";
import useRutine from "@/src/Hooks/useRutine";

const RutineDetails = () => {
  const router = useRouter();
  const { rutineid } = router.query;
  const RutineId =  rutineid;
  const { RutineData } = useRutine();

  const filteredRutine = RutineData? RutineData?.filter((notice) => notice?._id === RutineId) : [];

  if (filteredRutine?.length === 0) {
    return (
      <div>
        <p>Rutine not found</p>
        <Link href="/rutine">Back to Rutines</Link>
      </div>
    );
  }

  const Rutine = filteredRutine[0];

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
              href="/rutine"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Rutine
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Rutine Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {Rutine ? (
            <div className="my-4">
              <RutineDetailsComponent RutineDetailData={Rutine} />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default RutineDetails;
