import React, { useState } from 'react'

function HooksUseState() {
    //useState Hook
    const [value, setValue] = useState(0);
    // const state = useState();
    // console.log(state);
    //useEffect


    function addFunc() {
        setValue(value + 10)
    }

    return (
        <>
            <div>
                <h1>useState Hook</h1>
                <h4>value is : {value}</h4>
                <button onClick={() => { setValue(200) }}>Submit</button>
                <button onClick={addFunc}>Add 10 </button>
            </div>


        </>
    )
}

export default HooksUseState