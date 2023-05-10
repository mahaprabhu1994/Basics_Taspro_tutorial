import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Form() {

    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState({});

    const onSubmit = (e) => {
        setValue(e)
    }



    console.log(value)
    return (
        <div className='w-full h-screen flex'>
            <div className='w-1/3 h-3/6 m-auto rounded-md bg-green-100 '>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex gap-8 p-4  flex-col w-full h-full'>
                    <input type="text" placeholder='Student Name'
                        className='bg-stone-200 w-full h-[50px] border-gray-100 '
                        {...register("name")}
                    />
                    <input type="number" placeholder='Mark 1'
                        className='bg-stone-200 w-full h-[50px] border-gray-100 '
                        {...register("Mark1")}
                    />
                    <input type="number" placeholder='Mark 2'
                        className='bg-stone-200 w-full h-[50px] border-gray-100 '
                        {...register("mark2")}
                    />
                    <button className='w-full h-[50px] bg-blue-300'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Form