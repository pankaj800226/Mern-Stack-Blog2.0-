
import { useEffect, useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

const EditBlog = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [Description, setDescription] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    const submithandler = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8080/editPost/' + id, { name, Description, city })
            .then((result) => (result.data))
            .catch((err) => console.log(err))
        navigate('/')
        toast.success("Update Successfully !")

    }

    useEffect(() => {
        axios.post('http://localhost:8080/getRoute/' + id)
            .then((result) => {
                setName(result.data.name)
                setDescription(result.data.Description)
                setCity(result.data.city)
            })
            .catch((err) => console.log(err))
    }, [id])
    return (
        <>
            <div className="task_text">
                <h1>Update Your Blog </h1>
            </div>
            <div className='task_container'>
                <form onSubmit={submithandler}>
                    <input type="text"
                        placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input type="text"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}

                    />
                    <textarea type="text"
                        placeholder='Enter Your Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={Description}
                    />
                    <button type='submit'>Update</button>
                </form>
            </div>
        </>
    )
}

export default EditBlog