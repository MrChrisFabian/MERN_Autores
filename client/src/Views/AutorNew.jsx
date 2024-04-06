import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../hooks/useForm'
import FormAutor from '../components/FormAutor'

const AutorNew = () => {
    const initialValues = {
        nombre: "",
    }

    const { values: autor, handleChange, clearData } = useForm(initialValues);

    const [error, setError] = useState('');

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/autor/', autor)
            .then(res => {
                console.log(res)
                clearData();
                setError('');
                Navigate('/')
            })
            .catch(err => {
                setError(err.response.data.error.message)
            })
    }

    return (
        <div className='mt-2'>
            <NavLink className=" my-8 mt-11 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold" to={'/'}>Home</NavLink>
            <h1 className='text-xl mt-6'>Add a new Author:</h1>
            <FormAutor handleChange={handleChange} handleSubmit={handleSubmit} autor={autor} error={error}></FormAutor>
        </div>
    )
}

export default AutorNew