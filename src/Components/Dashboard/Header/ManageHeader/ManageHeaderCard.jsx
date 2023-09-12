import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import useHeadersData from "@/src/Hooks/useHeadersData";
import UpdateHeaderModal from "./UpdateHeaderModal";


const ManageHeaderCard = ({ header }) => {
  const { logo, schoolName, schoolAddress, estdSince, email, phone, _id } =
    header;
  const { handelDelete ,loading} = useHeadersData();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        image={logo}
        alt={schoolName}
        className="w-[100%] h-[200px] object-cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {schoolName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() => handelDelete(_id)}>
        {
          loading ? "Loading..." : <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        }
          
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateHeaderModal header={header} />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default ManageHeaderCard;
