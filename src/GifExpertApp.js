import React, { useState } from "react";

export const Funcion = ({value}) => {
    
    //let categories = ['dragon ball', 'naruto', 'one piece'];

    let [Categories, setCategories] = useState(['dragon ball', 'naruto', 'one piece']);

    const bingresar = () => {
        //console.log(value);
        // setCategories([...Categories, value]);
        // setCategories([Categories.push(value)]);
        setCategories([...Categories, value]);
        console.log('hola', Categories);
    };
    console.log(Categories);

    return (
        <>
        
        
        <h2>GifExpertApp</h2>
        <hr />

        <button onClick={bingresar}>Ingresar</button>

        <ol>
            {
                Categories.map(Categories => {
                    return <li key={Categories}>{Categories}</li>
                })
            }
        </ol>

        </>
    );
};

//export default Funcion;



// import React from 'react'
// import PropTypes from 'prop-types'

// const GifExpertApp = props => {
//   return (
//     <>
//         <h2>GifExpertApp</h2>
//         <hr />
//     </>
    
//   )
// }

// GifExpertApp.propTypes = {}

// export default GifExpertApp