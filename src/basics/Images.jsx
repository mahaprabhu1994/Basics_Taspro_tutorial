import React from 'react'
import hero from '../Assets/nature1.jpg'

function Images() {
    return (
        <>
            <div className="bg-green-50 w-full h-fit  flex ">
                <div className="w-3/6 h-5/6 bg-red-100">
                    <img alt="" src="https://images.unsplash.com/photo-1682685797527-63b4e495938f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-[100%] h-[100%]" />
                </div>
                <div className="w-3/6 h-5/6 bg-red-100">
                    <img alt="" src={hero} />
                </div>
            </div>
        </>
    )
}

export default Images