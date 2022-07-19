import React, { useState } from "react";
import { AddCategory } from "./Componentes/AddCategory";
import GifGrid from "./Componentes/GifGrid";


export const Funcion = ({value}) => {
    
    //let categories = ['dragon ball', 'naruto', 'one piece'];

    let [Categories, setCategories] = useState(['dragon ball', 'naruto', 'one piece']);

    const bingresar = (newCategory) => {
        //console.log(value);
        // setCategories([...Categories, value]);
        // setCategories([Categories.push(value)]);
        if (Categories.includes(newCategory)) return;
        setCategories([...Categories, newCategory]);
        console.log('hola', newCategory);
    };
    // console.log(Categories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            {/* <AddCategory setCategories={setCategories=Categories} /> */}
            <AddCategory onNewCategory={ (ca) => bingresar(ca)} />

            <ol>
                {
                    Categories.map(Categories => <GifGrid key={Categories} category={Categories} />)
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