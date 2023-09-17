import usePhotoGelary from "@/src/Hooks/usePhotoGelary";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import React from "react";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";

const ManagePhotoGelary = () => {
  const {  handelAlbumDelete, loadingPhotoGelary, albumData} = usePhotoGelary();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Photo Gelary</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {albumData &&
          albumData?.length &&
          albumData?.map((photoData) => {
            const { _id,title,totalPhotos, photos } = photoData;
            return (
              <Link href={`/dashboard/photogalery/maneg-photogalery/${_id}`}>
              <Card sx={{ maxWidth: 400 }} key={_id}>
                <CardMedia
                  component="img"
                  image={photos[0]?.image ||  "https://res.cloudinary.com/codewithashim/image/upload/v1694899580/ApstickSchool/gzalyyikfoq9ydbufsln.png";}
                  alt={title}
                  className="w-[100%] h-[200px] object-cover"
                />
                <div>
                 <h1> Album Name: {title}</h1>
                 <h1 className="mt-2"> Total Photo: {totalPhotos}</h1>
                </div>

                <CardActions disableSpacing>
                  <IconButton
                    aria-label="Delete"
                    onClick={() =>  handelAlbumDelete(_id)}
                  >
                  {
                    loadingPhotoGelary ? "Loading..." : <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
                  }
                    
                  </IconButton>
                </CardActions>
              </Card>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default ManagePhotoGelary;
