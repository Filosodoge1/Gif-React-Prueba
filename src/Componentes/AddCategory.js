import React, { useState } from 'react'

export const AddCategory = () => {

    const [first, setfirst] = useState('Hola mundo')

    const insertartexto = (e) =>{
        setfirst(e.target.value);
    }

    const funcsubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={funcsubmit}>
        <input type="text" value={first} onChange={insertartexto} />
        <h2> {first} </h2>
    </form>
  )
}
