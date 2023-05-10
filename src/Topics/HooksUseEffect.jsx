import React, { useEffect, useState } from 'react'


function HooksUseEffect() {
    const [value, setValue] = useState(1);
    const [value2, setValue2] = useState(1);
    useEffect(() => {
        const val1 = setValue2(value2 + 10);
        console.log("before clean up funciton", value2)
        return () => {
            clearInterval(val1);
            console.log("clean up funciton", value2)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div>
            <div>
                <h1>useEffect Hook with empty array</h1>
                <p>this will render only on first time of the component rendered</p>
                <h4>value is :{value}</h4>
                <button onClick={() => { setValue(value + 1) }}>Submit with empty Array</button>
            </div>
            <br />
            <br />
            <div>
                <h1>useEffect Hook without dependencies</h1>
                <p>this will render on each time,if any values are changed inside main components</p>
                <h4>value is :{value2}</h4>
                <button onClick={() => { setValue2(value2 + 1) }}>Submit without dependencies</button>
            </div>

        </div>
    )
}

export default HooksUseEffect