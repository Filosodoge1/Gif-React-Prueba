import React, {useState} from "react";
import PropTypes from "prop-types";

const Func = ({value}) => {

    const [counter, setCounter] = useState(value);
    
    const reset = () => {
        setCounter(value);
    }
    
    const substract = () => {
        setCounter(counter - 1);
    }

    const fun2 = () => {
        //console.log(e);
        //return () => {console.log('+1')};
        setCounter( counter + 1);
    };

    return (
        <>
            <h1>CounterApp</h1>
            {/* <h2> { value } </h2> */}
            <h2>{counter}</h2>

            {/* <button onClick={() => {console.log('+1')}}>+1</button> */}
            <button onClick={ fun2 }>+1</button>
            <button onClick={ reset }>Reset</button>
            <button onClick={ substract }>-1</button>
        </>
    )
}

Func.propTypes = {
    value: PropTypes.number.isRequired
}

Func.defaultProps = {
    value: 10
}


export default Func;