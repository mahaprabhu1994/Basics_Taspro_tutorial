import React from 'react'

function Table() {
    
    return (
        <div className='w-full h-screen flex'>
            <div className='w-4/6 h-1/2 bg-green-200 m-auto'>
                <table className='w-full'>
                    <thead className='w-full bg-red-100 h-[50px]'>
                        <tr className='w-full '>
                            <td className='w-4/6 p-2'>Name</td>
                            <td className='w-1/6 p-2'>Mark 1</td>
                            <td className='w-1/6 p-2'>Mark  2</td>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr className='w-full'>
                            <td className='4/6 p-2'>Maha</td>
                            <td className='w-1/6 p-2'>35</td>
                            <td className='w-1/6 p-2'>35</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table