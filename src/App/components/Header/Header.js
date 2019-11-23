import {
  AppBar,
  IconButton,
  Tab,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link, Location } from "@reach/router";

import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAppState } from "../../hooks";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    flexDirection: "row"
  },
  flex: {
    display: "flex"
  },
  selectedTab: {
    opacity: 1,
    borderBottom: "1px solid red"
  }
});

function NavLinkTab(props) {
  const classes = useStyles();
  return (
    <Location>
      {({ location }) => {
        return (
          <Tab
            classes={{ selected: classes.selectedTab }}
            selected={
              props.to !== "/"
                ? location.pathname.includes(props.to)
                : location.pathname === props.to
            }
            component={Link}
            {...props}
          />
        );
      }}
    </Location>
  );
}

function Header() {
  const { account } = useAppState();
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6">Tengai</Typography>
      </Toolbar>

      <div className={`${classes.flex} ${classes.root}`}>
        <NavLinkTab label="Dashboard" to="/" />
        <NavLinkTab label="Assignments" to="/assignments" />
        <NavLinkTab label="Candidates" to="/candidates" />
      </div>

      {account && (
        <IconButton aria-label="account of current user">
          <AccountCircle />
        </IconButton>
      )}
    </AppBar>
  );
}

export default Header;
