import React from 'react'
import Candidate from './Candidate'

const CandidateReview = ({ candidates, shortlistCandidate, rejectCandidate }) => {
  const id = window.location.href.split("/").pop()
  const candidate = candidates.filter(candidate => candidate.id === id)[0]

  const shortlist = () => {
    shortlistCandidate(id)
    window.history.back()
  }
  
  const reject = () => {
    rejectCandidate(id)
    window.history.back()
  }

  return (
    <div className='center'>
      <Candidate candidate={candidate} /> 
      <button className='action-shortlist' onClick={shortlist}>ShortList</button>
      <button className='action-reject' onClick={reject}>Reject</button>
    </div>
  )
}

export default CandidateReview
