// import React from 'react'
import '../index.css'

export const GifItem = ({id, title, url}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
