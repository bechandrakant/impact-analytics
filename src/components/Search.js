import React, { useState } from 'react'
import CandidateList from './CandidateList';

const Search = ({ candidates }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCandidates, setFilteredCandidates] = useState(candidates)

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const filtered = candidates.filter(candidate => candidate.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCandidates(filtered)
    setSearchTerm("")
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="search by candidate name"
        onChange={handleChange}
        value={searchTerm}
        className="search"
        />
        <button onClick={handleClick}>Search</button>
        <CandidateList candidates={filteredCandidates} />
    </div>
  )
}

export default Search
