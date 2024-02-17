import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai'

const AllUsersBlog = () => {
    const { id } = useParams()
    const [allUsersData, setAllUsersData] = useState([])

    useEffect(() => {
        axios.post('http://localhost:8080/getRoute/' + id)
            .then((result) => setAllUsersData(result.data))
            .catch((err) => console.log(err))
    }, [id])

    return (
        <>
            <div className='all_blog_data'>
                <div className='Blog_data'>
                    <div className="arrow">
                        <Link className="svg" to='/'><AiOutlineArrowLeft title="Back" /></Link>
                    </div>
                    <div className='blog_imgs'>
                        <img src={`http://localhost:8080/Images/${allUsersData.image}`} alt="" />
                    </div>
                    <div>
                        <h1>Name : {allUsersData.name}</h1>
                        <p>City  : {allUsersData.city}</p>
                        <p>Date :   {allUsersData.date}</p>
                        <p>Description : {allUsersData.Description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AllUsersBlog