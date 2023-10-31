import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track, handleDelete}) {

    const {image = defaultVinyl, BPM, artist, title, id} = track


  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={image} alt={title} />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
        <td><button onClick={()=>handleDelete(id)} key={id}>Delete</button></td>
    </tr>
  )
}

export default Track