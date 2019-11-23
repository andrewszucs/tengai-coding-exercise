import {
  AssignmentDetailsPage,
  AssignmentsListPage,
  AssignmentsPage,
  CandidatesPage,
  DashboardPage,
  Layout,
  NewAssignmentPage
} from "./pages";
import React, { useState } from "react";

import { AppStateContext } from "./contexts";
import { DEPARTMENT } from "../constants/filterEnums";
import { Router } from "@reach/router";

function App() {
  const [account, setAccount] = useState({
    id: "0",
    name: "Jenny Arvidsson",
    role: "Recruiter",
    company: "TNG",
    image: "",
    token: "UNIQUE_JWT_TOKEN"
  });

  const [assignments, setAssignments] = useState([
    {
      id: "5829",
      name: "Tengai GBG/Örebro/Övriga"
    }
  ]);

  const [assignmentFilter, setAssignmentFilter] = useState({
    by: DEPARTMENT,
    value: "MarketingDepId"
  });

  return (
    <AppStateContext.Provider
      value={{
        account,
        setAccount,
        assignments,
        setAssignments,
        assignmentFilter,
        setAssignmentFilter
      }}
    >
      <Router>
        <Layout path="/">
          <DashboardPage path="/" />
          <AssignmentsPage path="assignments">
            <AssignmentsListPage path="/" />
            <NewAssignmentPage path="new" />
            <AssignmentDetailsPage path=":id" />
          </AssignmentsPage>
          <CandidatesPage path="candidates" />
        </Layout>
      </Router>
    </AppStateContext.Provider>
  );
}

export default App;
