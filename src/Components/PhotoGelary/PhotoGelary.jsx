import React from "react";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { Card } from "@mui/material";
import usePhotoGelary from "@/src/Hooks/usePhotoGelary";

const PhotoGelary = () => {
  const { albumData } = usePhotoGelary();

  console.log(albumData, "albumData");

  return (
    <section>
      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {albumData &&
          albumData?.length &&
          albumData?.map((photoData) => {
            const { _id, title, totalPhotos, photos } = photoData;
            const imageSrc =
              photos[0]?.image ||
              "https://res.cloudinary.com/codewithashim/image/upload/v1694899580/ApstickSchool/gzalyyikfoq9ydbufsln.png";
            return (
              <Link href={`/photo-gallary/${_id}`}>
                <Card sx={{ maxWidth: 450 }} key={_id}>
                  <img
                    src={imageSrc}
                    alt={title}
                    className="w-[100%] h-[250px] object-cover"
                  />
                  <div className="p-6">
                    <h1> Album Name: {title}</h1>
                    <h1 className="mt-2"> Total Photo: {totalPhotos}</h1>
                  </div>
                </Card>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default PhotoGelary;
