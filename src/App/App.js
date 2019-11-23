import {
  ASSIGNED_TO_ME,
  DEPARTMENT,
  FAVOURITES
} from "../constants/filterEnums";
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
      name: "Tengai GBG/Örebro/Övriga",
      department: { id: "MARKETING_DEP_ID", name: "Marketing" },
      description: "Long description, perhaps two rows or more goes here...",
      isAssignedToMe: true,
      otherResponsibles: [{ id: "1", name: "Lisa Eriksson", image: "" }],
      focus: {
        "Stress Resistance": true,
        "Service Orientation": false,
        "Systematic Approach": false,
        "Problem Solving": false,
        Autonomy: true,
        Cooperation: false
      },
      candidates: [
        {
          id: "1",
          visibility: true,
          name: "Candidate 1",
          email: "candidate1@email.com",
          hasInterviewed: true,
          score: 4.6
        },
        {
          id: "2",
          visibility: true,
          name: "Candidate 2",
          email: "candidate2@email.com",
          hasInterviewed: true,
          score: 3.2
        },
        {
          id: "3",
          visibility: true,
          name: "Candidate 3",
          email: "candidate3@email.com",
          hasInterviewed: false,
          score: null
        },
        {
          id: "4",
          visibility: true,
          name: "Candidate 4",
          email: "candidate4@email.com",
          hasInterviewed: false,
          score: null
        },
        {
          id: "5",
          visibility: true,
          name: "Candidate 5",
          email: "candidate5@email.com",
          hasInterviewed: false,
          score: null
        },
        {
          id: "6",
          visibility: true,
          name: "Candidate 6",
          email: "candidate6@email.com",
          hasInterviewed: false,
          score: null
        }
      ],
      reports: [],
      notes: [],
      isFavourite: false
    }
  ]);

  const [departments, setDepartments] = useState([
    { id: ASSIGNED_TO_ME, count: 22 },
    { id: FAVOURITES, count: 4 },
    { id: "MARKETING_DEP_ID", name: "Marketing", count: 6 },
    { id: "SALES_DEP_ID", name: "Sales", count: 124 },
    { id: "R&D_DEP_ID", name: "R&D", count: 208 },
    { id: "HR_DEP_ID", name: "HR", count: 96 }
  ]);

  const [assignmentFilter, setAssignmentFilter] = useState({
    by: DEPARTMENT,
    value: "MarketingDepId"
  });

  const basePath = process.env.PUBLIC_URL;

  return (
    <AppStateContext.Provider
      value={{
        account,
        setAccount,
        assignments,
        setAssignments,
        departments,
        setDepartments,
        assignmentFilter,
        setAssignmentFilter,
        basePath
      }}
    >
      <Router basepath={basePath}>
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
