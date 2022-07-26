import React, { useState } from "react";

import { AddCategory, GifGrid } from './Componentes';

// import { AddCategory } from "./Componentes/AddCategory";
// import { GifGrid } from "./Componentes/GifGrid";


export const Funcion = ({value}) => {

    let [Categories, setCategories] = useState(['dragon ball']);

    const bingresar = (newCategory) => {
        if (Categories.includes(newCategory)) return;
        setCategories([...Categories, newCategory]);
        console.log('hola', newCategory);
    };
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory onNewCategory={ (ca) => bingresar(ca)} />

            <>
                {
                    Categories.map(category => <GifGrid key={category} category={category} />)
                }
            </>
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