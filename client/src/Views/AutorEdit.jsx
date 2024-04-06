import { useEffect, useState } from 'react'
import axios from 'axios'
import useForm from '../hooks/useForm'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import FormAutor from '../components/FormAutor'

const AutorEdit = () => {

    const initialValues = {
        nombre: "Cargando...",
    }

    const { values: autor, handleChange, setValues } = useForm(initialValues);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/autor/${id}`)
            .then(res => {
                setValues({
                    nombre: res.data.autor.nombre,
                })
            })
            .catch(err => console.log(err))
    }, [])


    const [error, setError] = useState('');

    const Navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/autor/${id}`, autor)
            .then(res => {
                Navigate('/')
            })
            .catch(err => {
                setError(err.response.data.error.message)
            })
    }

    const { id } = useParams()
    return (
        <>
            <NavLink className=" my-8 mt-11 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold" to={'/'}>Home</NavLink>
            <h1 className='text-xl mt-6'>Add a new Author:</h1>
            <FormAutor handleChange={handleChange} handleSubmit={handleSubmit} autor={autor} error={error}></FormAutor>
        </>

    )
}

export default AutorEdit