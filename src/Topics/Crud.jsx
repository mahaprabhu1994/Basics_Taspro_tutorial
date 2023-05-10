import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { API_USER } from '../Constants/API'
import axios from 'axios';
function Crud() {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: '', phone: ''
        }
    });

    const [formvalue, setFormValue] = useState();
    const [datas, setDatas] = useState([]);



    const onSubmit = (data) => {
        setFormValue(data);
        axios.post(API_USER, data);
        console.log(formvalue);
        window.location.reload(true)
    }
    console.log(formvalue);

    //Get the Value from DB;
    useEffect(() => {
        axios.get(API_USER).then((res) => { setDatas(res.data) })
    }, [])
    console.log(datas)
    //delete the user
    const deleteUser = (id) => {
        axios.delete(API_USER + id);
        window.location.reload(true)
    }

    //Update the user
    // const navigate = useNavigate();
    const updateUser = async (data) => {
        const id = data.id;
        (await axios.put(API_USER + id, data)).then((response) => {
            setFormValue(response.data);
        });

    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register("name")} />
                    <input type='text' {...register("phone", { valueAsNumber: true })} />
                    <input type='submit' />

                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>PhoneNumber</td>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((value) => {
                            return (
                                <>
                                    <tr key={value.id}>
                                        <td>{value.name}</td>
                                        <td>{value.phone}</td>
                                        <td>
                                            <input type='checkbox'
                                                onClick={() => {
                                                    setValue("name", value.name)
                                                    setValue("phone", value.phone)
                                                    updateUser(value)
                                                }} />
                                        </td>
                                        <td >
                                            <button onClick={() => { deleteUser(value.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Crud