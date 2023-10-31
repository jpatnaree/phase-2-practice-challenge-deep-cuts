import React from 'react'

function AddTrackForm({handleChange, handleSubmit, newTrack}) {
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={newTrack.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={newTrack.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={newTrack.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm