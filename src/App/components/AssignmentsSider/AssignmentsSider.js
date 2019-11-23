import { ASSIGNED_TO_ME, FAVOURITES } from "../../../constants/filterEnums";
import {
  Button,
  Divider,
  MenuItem,
  MenuList,
  makeStyles
} from "@material-ui/core";

import { Link } from "@reach/router";
import { PostAdd } from "@material-ui/icons";
import React from "react";
import { useAppState } from "../../hooks";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: "32px 16px"
  },
  divider: {
    margin: "12px 80% 12px 16px;"
  },
  menuItem: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  }
});

function AssignmentsSider(props) {
  const classes = useStyles();
  const { departments: allDepartments, basePath } = useAppState();
  const departments = allDepartments.filter(
    ({ id }) => id !== ASSIGNED_TO_ME && id !== FAVOURITES
  );
  const assignedToMe = allDepartments.find(({ id }) => id === ASSIGNED_TO_ME);
  const favourites = allDepartments.find(({ id }) => id === FAVOURITES);

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        to={`${basePath}/assignments/new`}
        component={Link}
        variant="outlined"
        startIcon={<PostAdd />}
      >
        New assignment
      </Button>
      <MenuList>
        <MenuItem key={ASSIGNED_TO_ME}>
          <div className={classes.menuItem}>
            <div>Assigned to me</div>
            <div>{assignedToMe && assignedToMe.count}</div>
          </div>
        </MenuItem>
        <MenuItem key={ASSIGNED_TO_ME}>
          <div className={classes.menuItem}>
            <div>Favourites</div>
            <div>{favourites && favourites.count}</div>
          </div>
        </MenuItem>
      </MenuList>
      <Divider className={classes.divider} />
      <MenuList>
        <MenuItem key={"ALL_DEPARTMENTS"}>
          <div className={classes.menuItem}>
            <div>All departments</div>
            <div>
              {departments.reduce((acc, { count }) => (acc += count), 0)}
            </div>
          </div>
        </MenuItem>
        {departments.map(({ id, name, count }) => (
          <MenuItem key={id}>
            <div className={classes.menuItem}>
              <div>{name}</div>
              <div>{count}</div>
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}

export default AssignmentsSider;
