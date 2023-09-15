import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegTrashAlt } from "react-icons/fa";
import UpdateStatisticModal from "./UpdateStatisticModal";
import useStatistic from "@/src/Hooks/useStatistic";


const ManegStatisticCard = ({ statistic }) => {
  const { title, counte ,_id, status } =
  statistic;
  const { handelDeleteStatistic, loadingStatistic } =useStatistic();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {counte}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {status}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" onClick={() => handelDeleteStatistic(_id)}>
        {
          loadingStatistic ? "Loading..." :  <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
        }
        </IconButton>
        <IconButton aria-label="Edite">
          <UpdateStatisticModal statistic={statistic} />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default ManegStatisticCard;
