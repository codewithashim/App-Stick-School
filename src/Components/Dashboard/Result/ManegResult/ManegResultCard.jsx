import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useResult from "@/src/Hooks/useResult";
import UploadResultModal from "./UploadResultModal";

const ManegResultCard = ({ result }) => {
  const { title, details, pbulishDate, _id } = result;
  const { loadingResult, handelDeleteResult } = useResult();

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
        <IconButton aria-label="Delete" onClick={() => handelDeleteResult(_id)}>
          {loadingResult ? (
            "Loading..."
          ) : (
            <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
          )}
        </IconButton>
        <IconButton aria-label="Edite">
          <UploadResultModal result={result} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ManegResultCard;
