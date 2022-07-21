import React from 'react'

export const GifItem = ({id, title, url}) => {

    console.log({url});

  return (
    <div className='card'>
        <img src={url} title={title}></img>
        <h2>{title}</h2>
    </div>
  )
}
