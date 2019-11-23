import {
  Add,
  ArrowBack,
  ChevronRight,
  Edit,
  Favorite,
  FavoriteBorder,
  InsertComment,
  MenuBook
} from "@material-ui/icons";
import {
  Button,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
  makeStyles
} from "@material-ui/core";

import AssignmentOptionsExpansionPanel from "../../components/AssignmentOptionsExpansionPanel/";
import { Link } from "@reach/router";
import React from "react";
import { useAppState } from "../../hooks";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: "32px"
  },
  stretch: {
    width: "100%"
  },
  listItemIcon: {
    minWidth: "40px"
  },
  backButton: {
    borderRadius: "50%",
    padding: "6px",
    minWidth: "unset",
    marginRight: "20px"
  },
  detailView: {
    margin: "0 32px"
  },
  breadCrumbsRow: {
    display: "flex",
    marginBottom: "32px",
    alignItems: "center"
  },
  department: {
    opacity: 0.5
  },
  chevron: {
    fontSize: "0.75rem",
    margin: "0 10px",
    opacity: 0.5
  },
  title: {
    fontWeight: "bold"
  }
});

function ActionsMenuItem({ Icon, title }) {
  const classes = useStyles();
  return (
    <MenuItem>
      <ListItemIcon className={classes.listItemIcon}>
        <Icon fontSize="small" />
      </ListItemIcon>
      <Typography variant="inherit">{title}</Typography>
    </MenuItem>
  );
}

function AssignmentDetailsPage(props) {
  const classes = useStyles();
  const { assignments, basePath } = useAppState();
  const selectedAssignment = assignments.find(({ id }) => id === props.id);

  if (!selectedAssignment) {
    return <div>Not found</div>;
  }

  return (
    <div className={classes.root}>
      <div className={`${classes.stretch} ${classes.detailView}`}>
        <div className={`${classes.breadCrumbsRow}`}>
          <Button
            to={`${basePath}/assignments`}
            component={Link}
            variant="outlined"
            className={classes.backButton}
          >
            <ArrowBack fontSize="small" />
          </Button>
          <Typography
            className={`${classes.title} ${classes.department}`}
            variant="caption"
          >
            {selectedAssignment.department.name}
          </Typography>
          <ChevronRight className={classes.chevron} />
          <Typography
            className={classes.title}
            variant="caption"
          >{`${selectedAssignment.name} (ID${selectedAssignment.id})`}</Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          className={classes.title}
        >{`${selectedAssignment.name} (ID${selectedAssignment.id})`}</Typography>
      </div>
      <div>
        <AssignmentOptionsExpansionPanel
          title="Actions"
          render={() => (
            <div className={classes.stretch}>
              <Button
                className={classes.stretch}
                variant="outlined"
                startIcon={<MenuBook />}
              >
                Create report
              </Button>
              <MenuList>
                <ActionsMenuItem Icon={Edit} title="Edit assignment" />
                <ActionsMenuItem
                  Icon={
                    selectedAssignment.isFavourite ? Favorite : FavoriteBorder
                  }
                  title="Favourite assignment"
                />
                <ActionsMenuItem Icon={Add} title="Add/remove candidates" />
                <ActionsMenuItem
                  Icon={InsertComment}
                  title="Add assignment note"
                />
              </MenuList>
            </div>
          )}
        />
        <AssignmentOptionsExpansionPanel
          title="Reports"
          render={() => <Typography>No reports</Typography>}
        />
        <AssignmentOptionsExpansionPanel
          title="Notes"
          render={() => <Typography>No notes</Typography>}
        />
      </div>
    </div>
  );
}

export default AssignmentDetailsPage;
