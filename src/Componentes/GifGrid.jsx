import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {

  const { first, isLoading } = useFetchGifs(category);

  console.log(isLoading);
  
  return (
    <div>
        <h1>{category}</h1>
        {
          isLoading ? ("Cargando"):null
        }
        <div className='card-grid'>
          {
            first.map(
              ({id, title, url}) => (
                <GifItem key={id} title={title} url={url} />
              )
            )
          }
        </div>
    </div>
  )
}

export default GifGrid