import React from 'react'
import GifApi from '../Helpers/GifApi'

const GifGrid = ({key, category}) => {
  GifApi(category);
  return (
    <div>
        <h1>{category}</h1>
    </div>
  )
}

export default GifGrid