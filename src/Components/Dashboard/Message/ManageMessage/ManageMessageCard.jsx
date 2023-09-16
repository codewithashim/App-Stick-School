import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useTeacherData from "@/src/Hooks/useTeachersData";
import UpdateMessageModal from "./UpdateMessageModal";

const ManageMessageCard = ({ messageData }) => {
  const { name, position, image, _id, message } = messageData;
  const { handelDeleteMessage, loading } = useTeacherData();

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
        <IconButton
          aria-label="Delete"
          onClick={() => handelDeleteMessage(_id)}
        >
          {loading ? (
            "Loading..."
          ) : (
            <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
          )}
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateMessageModal messageData={messageData} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ManageMessageCard;
