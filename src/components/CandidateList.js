import React from "react";
import Candidate from "./Candidate";

const CandidateList = ({ candidates, filterStatus }) => {
  const filteredCandidates =
    filterStatus ?
    candidates.filter((candidate) => candidate.status === filterStatus): candidates

  return (
    <div className='center list'>
      {filteredCandidates.map((candidate) => (
        <Candidate key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidateList;
