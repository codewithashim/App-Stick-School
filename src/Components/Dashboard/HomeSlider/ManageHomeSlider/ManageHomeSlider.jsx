import useHomeSlider from "@/src/Hooks/useHomeSlider";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageHomeSlider = () => {
const{homeSliderData, handelDeleteHomeSlider,loadingHomeSlider} = useHomeSlider() 

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Slider</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {homeSliderData &&
          homeSliderData?.length &&
          homeSliderData?.map((slider) => {
            const { _id, image,title } = slider;
            return (
              <Card sx={{ maxWidth: 400 }} key={_id}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={title}
                  className="w-[100%] h-[200px] object-cover"
                />

                <CardActions disableSpacing>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handelDeleteHomeSlider(_id)}
                  >
                  {
                    loadingHomeSlider ? "Loading..." : <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
                  }
                    
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </section>
  );
};

export default ManageHomeSlider;
