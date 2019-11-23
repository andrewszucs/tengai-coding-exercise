import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  makeStyles
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "300px"
  }
});

function AssignmentOptionsExpansionPanel({ title, render }) {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.root} defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{render()}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default AssignmentOptionsExpansionPanel;
