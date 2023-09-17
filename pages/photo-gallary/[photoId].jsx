import RootLayout from "@/src/Layouts/RootLayout";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import usePhotoGelary from "@/src/Hooks/usePhotoGelary";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";

const PhotoGelaryDetails = () => {
  const router = useRouter();
  const { photoId } = router.query;
  const resultId = photoId;
  const { albumData } = usePhotoGelary();

  const filteredResult = albumData
    ? albumData?.filter((album) => album?._id === resultId)
    : [];

  if (filteredResult?.length === 0) {
    return (
      <div>
        <p>Photo not found</p>
        <Link href="/photo-gallary">Back to PhotoGelary</Link>
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
              href="/photo-gallary"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Photo Gelary
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Album Details
            </Typography>
          </Breadcrumbs>
        </div>

        <div className="my-4">
          {result ? (
            <div className="grid gap-4 my-4 md:grid-cols-4">
              {result?.photos &&
                result?.photos?.map((photoData) => {
                  return (
                    <Card sx={{ maxWidth: 400 }} key={photoData?._id}>
                      <CardMedia
                        component="img"
                        image={photoData?.image}
                        alt={photoData?.title}
                        className="w-[100%] h-[400px] object-cover"
                      />
                    </Card>
                  );
                })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default PhotoGelaryDetails;
