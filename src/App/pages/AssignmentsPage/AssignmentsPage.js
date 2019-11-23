import AssignmentsSider from "../../components/AssignmentsSider";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  stretch: {
    flex: 1
  }
});

function AssignmentsPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AssignmentsSider />
      <div className={classes.stretch}>{props.children}</div>
    </div>
  );
}

export default AssignmentsPage;
