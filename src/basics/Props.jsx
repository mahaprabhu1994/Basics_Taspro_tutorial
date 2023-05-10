import React from 'react'
import PropsChild from './PropsChild'

function Props() {
    const name = "Mahaprabhu";
    const age = 28;
    return (
        <div>
            <h1>Parent component</h1>
            <PropsChild fisrtname={name} age={age} />
        </div>
    )
}

export default Props