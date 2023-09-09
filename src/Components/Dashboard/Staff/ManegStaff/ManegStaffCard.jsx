import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useStaffData from "@/src/Hooks/useStaff";
import UpdateStaffModal from "./UpdateStaffModal";


const ManegStaffCard = ({ Staff }) => {
  const { name, position, image ,_id } =
  Staff;
  const { handelDeleteStaff,loading } = useStaffData();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="w-[100%] h-[200px] object-cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {position}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() => handelDeleteStaff(_id)}>
        {
          loading ? "Loading..." :  <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        }
         
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateStaffModal Staff={Staff} />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default ManegStaffCard;
