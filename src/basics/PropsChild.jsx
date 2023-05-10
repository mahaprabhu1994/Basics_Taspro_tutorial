import React from 'react'

function PropsChild(props) {
    //type 1
    // const fisrtname = props.fisrtname
    // console.log(fisrtname);
    // const age = props.age;
    // console.log(age);
    //type 2
    const { fisrtname, age } = props;

    return (
        <div>
            <h1>Child Components</h1>
            <h3> Name : {fisrtname}</h3 >
            <h3> Age : {age}</h3 >
        </div>
    )
}

export default PropsChild