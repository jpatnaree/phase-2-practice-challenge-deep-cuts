import React from 'react'
import Track from './Track.jsx'

function TracksList({tracks, deleteTrack}) {

  const tracksDisplay = tracks.map(track => {
    return(
      <Track key={track.id} track={track} deleteTrack={deleteTrack} />
    )
  })

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {tracksDisplay}
      </tbody>
    </table>
  )
}

export default TracksList