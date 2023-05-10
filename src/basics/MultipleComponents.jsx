import React from 'react'
import Card from './Card'

function MultipleComponents() {
    return (
        <>
            <div className='  '>
                <div className=' flex flex-row '>
                    <Card />
                    <Card />
                </div>
                <div className='flex flex-row'>
                    <Card />
                    <Card />
                </div>
                <div className=' flex flex-row '>
                    <Card />
                    <Card />
                </div>
                <div className='flex flex-row'>
                    <Card />
                    <Card />
                </div>
            </div>

        </>
    )
}

export default MultipleComponents