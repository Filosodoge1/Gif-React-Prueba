import React, { useState } from 'react'

export const AddCategory = () => {

    const [first, setfirst] = useState('Hola mundo')

    const funsubmit = (e) =>{
        setfirst(e.target.value);
    }

  return (
    <>
        <input type="text" value={first} onChange={funsubmit} />
        <h2> {first} </h2>
    </>
  )
}
