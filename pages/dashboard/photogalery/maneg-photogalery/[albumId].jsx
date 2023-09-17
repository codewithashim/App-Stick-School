import Link from "next/link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import usePhotoGelary from "@/src/Hooks/usePhotoGelary";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../src/theme/theme";
import FullLayout from "../../../../src/Layouts/DashboardLayout";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";

const PhotoGelaryAlbumDetails = () => {
  const router = useRouter();
  const { albumId } = router.query;
  const resultId = albumId;
  const { albumData, loadingPhotoGelary, handelPhotoDelete } = usePhotoGelary();

  const filteredResult = albumData ? albumData?.filter((album) => album?._id === resultId) : [];

  if (filteredResult?.length === 0) {
    return (
      <div>
        <p>Photo not found</p>
        <Link href="/dashboard/photogalery/maneg-photogalery">Back to Results</Link>
      </div>
    );
  }

  const result = filteredResult[0];
  
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
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
              href="/dashboard/photogalery/maneg-photogalery"
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
            <div className="grid gap-4 md:grid-cols-4">
                {
                  result?.photos && result?.photos?.map((photoData)=>{
                    return(
                      <Card sx={{ maxWidth: 400 }} key={photoData?._id}>
                <CardMedia
                  component="img"
                  image={photoData?.image}
                  alt={photoData?.title}
                  className="w-[100%] h-[200px] object-cover"
                />
               
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="Delete"
                    onClick={() =>  handelPhotoDelete(photoData?._id)}
                  >
                  {
                    loadingPhotoGelary ? "Loading..." : <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
                  }
                    
                  </IconButton>
                </CardActions>
              </Card>
                    )
                  })
                }
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
      </FullLayout>
    </ThemeProvider>
  );
};

export default PhotoGelaryAlbumDetails;
