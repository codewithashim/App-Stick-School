import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useAbout from "@/src/Hooks/useAbout";
import UpdateAboutModal from "./UpdateAboutModal";

const ManageAboutCard = ({ about }) => {
  const { image, title, subtitle, details, _id } = about;
  const {  handelAboutDelete } = useAbout();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className="w-[100%] h-[200px] object-cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() =>  handelAboutDelete(_id)}>
          <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateAboutModal about={about} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ManageAboutCard;
