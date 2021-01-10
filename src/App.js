import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import CandidateList from "./components/CandidateList";
import CandidateReview from "./components/CandidateReview";
import Search from './components/Search'
import axios from "axios";

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "POST, GET",
          },
        }
      )
      .then((data) => {
        const formatCandidate = data?.data?.map((candidate) => {
          return {
            id: candidate.id,
            name: candidate.name,
            avatar: candidate.Image,
            status: "applied",
          };
        });
        setCandidates(formatCandidate);
      });
  }, []);

  const shortlistCandidate = (id) => {
    const newList = candidates.map(candidate => {
      if (candidate.id === id) 
        candidate.status = 'shortlisted'
      return candidate
    })
    setCandidates(newList)
  }

  const rejectCandidate = (id) => {
    const newList = candidates.map(candidate => {
      if (candidate.id === id) 
        candidate.status = 'rejected'
      return candidate
    })
    setCandidates(newList)
  }

  return (
    <div className='center'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/shortlisted">Shortlisted</Link>
        </li>
        <li>
          <Link to="/rejected">Rejected</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/">
          <CandidateList candidates={candidates} />
        </Route>
        <Route exact path="/search">
          <Search candidates={candidates} />
        </Route>
        <Route path="/shortlisted">
          <CandidateList candidates={candidates} filterStatus="shortlisted"/>
        </Route>
        <Route path="/rejected">
          <CandidateList candidates={candidates} filterStatus="rejected" />
        </Route>
        <Route exact path="/:id">
          <CandidateReview 
            candidates={candidates}
            shortlistCandidate={shortlistCandidate}
            rejectCandidate={rejectCandidate}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
