import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    // const [first, setfirst] = useState('Hola mundo');
    const [first, setfirst] = useState('');

    const insertartexto = (e) =>{
        setfirst(e.target.value);
    }

    const funcsubmit = (e) => {
        e.preventDefault();
        // console.log(setCategories);
        // setCategories(cats => [...cats, first]);
        if (first.trim().length > 2) {
            // setCategories( cats => [...cats, first]);
            onNewCategory(first.trim());
        }
    }

  return (
    <form onSubmit={funcsubmit}>
        <input type="text" value={first} onChange={insertartexto} />
        <h2> {first} </h2>
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}