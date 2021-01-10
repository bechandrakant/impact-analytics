import React from 'react'
import { Link } from 'react-router-dom'

const Candidate = ({ candidate }) => {

  return (
    <Link to={"/" + candidate.id}>
      <div className="card">
        <img src={candidate.avatar} alt={candidate.name} />
        <h3>{candidate.name}</h3>
        <h4 style={{ 
          backgroundColor: candidate.status === 'shortlisted' 
          ? 'green'
          : candidate.status === 'rejected' ? 'red': 'gray'}}>
          {candidate.status}</h4>
      </div>
    </Link>
  )
}

export default Candidate
