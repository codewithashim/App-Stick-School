import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useSylebus from "@/src/Hooks/useSylebus";
import UploadSylebusModal from "./UploadSylebusModal";

const ManegSylebusCard = ({ Sylebus }) => {
  const { title, details, pbulishDate, _id } = Sylebus;
  const { loadingSylebus, handelDeleteSylebus } = useSylebus();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pbulishDate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() => handelDeleteSylebus(_id)}>
          {loadingSylebus ? (
            "Loading..."
          ) : (
            <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
          )}
        </IconButton>
        <IconButton aria-label="Edite">
          <UploadSylebusModal Sylebus={Sylebus} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ManegSylebusCard;
