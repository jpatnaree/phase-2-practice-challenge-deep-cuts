import React from 'react'

function Search({handleSearchTrack}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleSearchTrack}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search