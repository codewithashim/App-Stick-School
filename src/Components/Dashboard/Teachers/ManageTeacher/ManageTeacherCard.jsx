import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useTeachersData from "@/src/Hooks/useTeachersData";
import UpdateTeacherModal from "./UpdateTeacherModal";


const ManageTeacherCard = ({ teacher }) => {
  const { name, detail, joiningDate, position, image ,_id } =
  teacher;
  const { handelDeleteTeacher } = useTeachersData();

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
        <IconButton aria-label="Delete" onClick={() => handelDeleteTeacher(_id)}>
          <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateTeacherModal teacher={teacher} />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default ManageTeacherCard;
