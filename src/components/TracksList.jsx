import React from 'react'
import Track from './Track'

function TracksList({tracksData, handleDelete}) {

  const tracksDisplay = tracksData.map((track) => {
    return <Track key={track.id} track={track} handleDelete={handleDelete} />
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