import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'


const Profile = () => {
    const [getData, setGetData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/getData')
            .then((response) => setGetData(response.data))
            .catch(err => console.log(err))

    }, [getData])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/delete/' + id)
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }


    return (
        <>
            <div className="profile_cart_container">

                <div className="profile_card">
                    <img src="http://localhost:8080/Images/file_1707900378562.jpg" alt="" className='users_card' />
                    <h1 className="card__name">Pankaj Kumar</h1>
                    <p className="card__name">CodeWithPankaj</p>
                    <p className="card__name">Teri ankho me dekha to
                        Mere dil❤️ ke server me save ho gyi 🧑‍💻</p>
                    <div className="grid-container">
                        <div className="grid-child-posts">
                            Posts : {getData.length}
                        </div>
                        <div className="grid-child-followers">
                            <Link to=''>Edit Profile</Link>
                        </div>

                    </div>
                    <ul className="social-icons">
                        <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                        <li><Link to="https://github.com/"><i className="fa-brands fa-github"></i></Link></li>
                        <li><Link to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></Link></li>
                    </ul>
                </div>

            </div>
            <h1 style={{ textAlign: 'center', marginTop: "15px" }}>Post Section</h1>
            <div className="flex_container">
                {
                    getData.length == 0
                        ?
                        <div><h2 style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "80vh" }}>Blog not found</h2></div>
                        :
                        getData.map((data, index) => (

                            <div className="home_blogContainer" key={index}>
                                <img src={`http://localhost:8080/Images/${data.image}`} alt="" />
                                <div style={{ marginTop: "10px" }}>
                                    <p> Name : {data.name}</p>
                                    <p>City : {data.city}</p>
                                    <p>Date : {data.date}</p>
                                    <p>Des : {data.Description}</p>
                                    <div className="btn_delete">
                                        <Link to={`/editBlog/${data._id}`}><button>
                                            <FaEdit />
                                        </button></Link>
                                        <button onClick={() => handleDelete(data._id)}>
                                            <AiFillDelete />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))

                }

            </div>
        </>

    );
}

export default Profile
//  <img src={`http://localhost:8080/Images/${data.image}`} alt="post"
// />

