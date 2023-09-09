import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import useCommittee from "@/src/Hooks/useCommittee";
import UpdateCommitteeModal from "./UpdateCommitteeModal";

const ManegCommitteeCard = ({ committee }) => {
  const { name, position, image, _id } = committee;
  const { handelDeleteCommittee, loadingCommittte } = useCommittee();

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
          onClick={() => handelDeleteCommittee(_id)}
        >
          {loadingCommittte ? (
            "Loading..."
          ) : (
            <FaRegTrashAlt className="text-[2rem] mr-3 text-red-500" />
          )}
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateCommitteeModal Committee={committee} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ManegCommitteeCard;
