import React, { useState } from 'react'

function Conditional() {
    const [value, setvalue] = useState(false);
    // const logStatus = true;
    console.log(value);
    console.log(setvalue)
    // const ggg = useState();
    // console.log(ggg);

    return (
        <>
            <div>
                {value ? <h1>Welcome To Dashboard</h1> : <h1>Please Login !</h1>}
            </div>
            <div><button className='bg-red-300' onClick={() => { setvalue(!value) }}>{value ? <h4>logout</h4> : <h4>login</h4>}</button></div>
        </>
    )
}

export default Conditional