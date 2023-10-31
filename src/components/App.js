import React, { useEffect, useState } from "react";
import TracksPage from './TracksPage'
import '../App.css';
import vinyl from '../assets/vinyl_PNG88.png';

function App() {

  const [tracksData, setTracksData] = useState([])
  const [newTrack, setNewTrack] = useState({})
  const [searchTrack, setSearchTrack] = useState('')

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
    .then(resp => resp.json())
    .then(tracks => {
      setTracksData(tracks)
    })
  }, [])

  function handleChange(e) {
    // console.log(e.target.value)
    // console.log(e.target.name)
    const {name, value} = e.target
    setNewTrack({...newTrack ,[name]: value})

  }

  function handleSubmit(e) {
    e.preventDefault()
    // setTracksData({...tracksData, newTrack])

    fetch(`http://localhost:8001/tracks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newTrack)
    })
    .then(resp => {
      if(resp.ok) {
        return resp.json()
      }
    })
    .then(addedTrack => {
      setTracksData([...tracksData, addedTrack])
    })
  }


  function handleSearch(e) {
    setSearchTrack(e.target.value)

  }

  const filterSearch = tracksData.filter(tracks => {
    if(tracks.title.toUpperCase().includes(searchTrack.toUpperCase()) || tracks.artist.toUpperCase().includes(searchTrack.toUpperCase()) ) {
      return true
    }
  })

  function handleDelete(id) {
    setTracksData(tracksData.filter(track => {
      return track.id !== id
    }))
    fetch(`http://localhost:8001/tracks/${id}`, {
      method: "DELETE"
    })
  }


  return (
    <div>
      <div className="header">
        <img src={vinyl} alt="vinyl record" />
        <h1>Flatiron Deep Cuts</h1>
      </div>
      <TracksPage tracksData={filterSearch} handleChange={handleChange} handleSubmit={handleSubmit} newTrack={newTrack} handleSearch={handleSearch} handleDelete={handleDelete} />
    </div>
  );
}

export default App;