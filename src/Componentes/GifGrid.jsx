import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { GifApi } from '../Helpers/GifApi'
import { GifItem } from './GifItem';

const GifGrid = ({category}) => {
  const [first, setfirst] = useState([]);

  const arregloImg = async() => {
    const newImg = await GifApi(category);
    setfirst(newImg);
  }

  useEffect(() => {
    arregloImg();
  }, []);

  
  return (
    <div>
        <h1>{category}</h1>
        <ol>
          {
            first.map(
              ({id, title, images}) => (
                <GifItem key={id} title={title} images={images.downsized_medium.url}/>
              )
            )
          }
        </ol>
    </div>
  )
}

export default GifGrid