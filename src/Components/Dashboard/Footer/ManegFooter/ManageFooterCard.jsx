import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import UpdateFooterModal from "./UpdateFooterModal";

const ManageFooterCard = ({ footer }) => {
  const { schoolAddress, schoolName } = footer;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {schoolName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {schoolAddress}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Edite">
          <UpdateFooterModal footer={footer} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ManageFooterCard;
