import { useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const AddBlog = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')
    const [Description, setDescription] = useState('')
    const [file, setFile] = useState('')

    const navigate = useNavigate()

    const submithandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('city', city)
        formData.append('date', date)
        formData.append('Description', Description)
        formData.append('file', file)

        if (name !== "" && city !== "" & date !== "" && Description !== "" && file !== "") {
            try {
                const data = axios.post('http://localhost:8080/upload', formData)
                navigate('/')
                console.log(data);
                toast.success('🦄Post successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            } catch (error) {
                console.log(error);

            }
        } else {
            toast.error('🦄Fill All Box', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setName('')
        setCity('')
        setDescription('')
        setDate('')
        setFile('')
    }
    return (
        <>
            <div className="task_text">
                <h1>Post Your Blog </h1>
            </div>
            <div className='task_container'>
                <form onSubmit={submithandler}>
                    <input type="text"
                        placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input type="text"
                        placeholder='Enter Place'
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <input type="date"
                        style={{ cursor: "pointer" }}
                        placeholder='Enter data'
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <textarea type="text"
                        placeholder='Enter Your Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={Description}
                    />

                    <input type="file"
                        accept='image/*'
                        placeholder='Enter your image path link'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type='submit'>POST</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog