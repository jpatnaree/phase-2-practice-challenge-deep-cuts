import React from 'react'

function AddTrackForm({newTrack, setNewTrack, setTracks, tracks}) {

  function handleInputChange(e) {
    const {name, value} = e.target
    if(name === 'BPM') {
      setNewTrack({...newTrack, [name]: Number(value)})
    } else {
      setNewTrack({...newTrack, [name]: value})
    }
  }

 function handleSubmitTrack(e) {
    e.preventDefault()
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' //can omit if you want, still good practice to have it on
      }, 
      body: JSON.stringify(newTrack)
    })
    .then(resp => {
      if(resp.ok) {
        return resp.json()
      }
    })
    .then(addedNewTrack => {
      setTracks([...tracks, addedNewTrack])
    })
 }

  return (
      <form onSubmit={handleSubmitTrack}>
        <div>
          <input onChange={handleInputChange} value={newTrack.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleInputChange} value={newTrack.title} type="text" name="title" placeholder="title" />
          <input onChange={handleInputChange} value={newTrack.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleInputChange} value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm