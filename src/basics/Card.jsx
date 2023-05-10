import React from 'react'
import nature from '../Assets/nature1.jpg'


function Card() {

    return (
        <div className='w-full h-screen flex '>
            <div className=' h-4/6 bg-green-200 m-auto  shadow-md'>
                <div className='w-full h-4/6 '>
                    <img alt='' src={nature} className='h-full w-full ' />
                </div>
                <div className='w-full h-2/6'>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.. </p>
                    <button className='bg-orange-300 text-center w-full mb-0' onClick={() => { alert("welcome") }}>read more...</button>
                </div>
            </div>
        </div>
    )
}

export default Card