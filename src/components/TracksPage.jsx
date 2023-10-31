import React from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage({tracksData, handleChange, handleSubmit, newTrack, handleSearch, handleDelete}) {

    
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTrackForm handleChange={handleChange} handleSubmit={handleSubmit} newTrack={newTrack} />
      <TracksList tracksData={tracksData} handleDelete={handleDelete} />
    </div>
  )
}

export default TracksPage