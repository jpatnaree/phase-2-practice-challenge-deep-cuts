import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [tracks, setTracks] = useState([]);
  const [newTrack, setNewTrack] = useState({})
  const [searchTrack, setSearchTrack] = useState('')

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
    .then(resp => resp.json())
    .then(tracksJson => {
      setTracks(tracksJson)
    })
  },[])

  function deleteTrack(id) {
    setTracks(tracks.filter(track => {
      return track.id !== id
    }))
    fetch(`http://localhost:8001/tracks/${id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(deletedTrack => {
      console.log(deletedTrack)
    })
  }

  function handleSearchTrack(e) {
    const {value} = e.target
    setSearchTrack(value)
  }
  console.log(searchTrack)

  const filterTracks = tracks.filter(track => {
    return track.title.toUpperCase().includes(searchTrack.toUpperCase()) || track.artist.toUpperCase().includes(searchTrack.toUpperCase())
  })

    
  return (
    <div>
      <Search handleSearchTrack={handleSearchTrack}/>
      <AddTrackForm newTrack={newTrack} setNewTrack={setNewTrack} setTracks={setTracks} tracks={tracks} />
      <TracksList tracks={filterTracks}  deleteTrack={deleteTrack}/>
    </div>
  )
}

export default TracksPage