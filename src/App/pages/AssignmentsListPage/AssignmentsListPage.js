import { Link } from "@reach/router";
import React from "react";
import { useAppState } from "../../hooks";

function AssignmentsListPage(props) {
  const { assignments, basePath } = useAppState();
  return (
    <ul>
      {assignments.map(({ name, id }) => (
        <li key={id}>
          <Link to={`${basePath}/assignments/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AssignmentsListPage;
