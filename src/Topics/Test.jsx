import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Test() {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: 'maha', course: 'civil'
        }
    });
    const [formValue, setFormValue] = useState();

    const onSubmit = (data) => {
        setFormValue(data)
    }
    console.log(formValue)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("name")} />
                <input type='text' {...register("course")} />
                <input type='submit' />
                <button onClick={() => {
                    setValue("name", 'arun')
                    setValue("course", 'aero')
                }}>edit</button>
            </form>
        </div >
    )
}

export default Test