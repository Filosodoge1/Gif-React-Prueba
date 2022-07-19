import React from 'react'
import { useState } from 'react';
import GifApi from '../Helpers/GifApi'

const GifGrid = ({category}) => {
  const [first, setfirst] = useState([]);

  const arregloImg = async() => {
    const newImg = await GifApi(category);
    setfirst(newImg);
  }

  

  //GifApi(category);
  return (
    <div>
        <h1>{category}</h1>
        <ol>
          {
            first.map(
              ({id, title}) => (
                <li key={id}>{title}</li>
              )
            )
          }
        </ol>
    </div>
  )
}

export default GifGrid