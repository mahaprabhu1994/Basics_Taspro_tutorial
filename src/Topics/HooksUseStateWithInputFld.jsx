import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function HooksUseStateWithInputFld() {
    //react hook form
    const { register, handleSubmit } = useForm();
    const [amount, setAmount] = useState(0);

    function onSubmit(e) {
        setAmount(e.amount);
    }
    return (
        <div>
            <div>
                <h1>useState using Input Field</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("amount", { valueAsNumber: true })} type="number" />
                    <input type='submit' />
                </form>
                <h1>amount : {amount}</h1>
            </div>
        </div>
    )
}

export default HooksUseStateWithInputFld