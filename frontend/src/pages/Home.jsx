import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
  const [getBlog, setGetBlog] = useState([])
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/getData')
      .then((response) => setGetBlog(response.data))
      .catch(err => console.log(err))

  }, [getBlog])

  return (
    <>


      <div className="flex_container">

        {
          getBlog.length === 0 ? (
            <div>
              <h2 style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "80vh" }}>Blog not found</h2>
            </div>
          ) : (
            getBlog.map((data, i) => (
              <div className="home_blogContainer" key={i}>
                <Link to={`/alluserblog/${data._id}`}>
                  <img src={`http://localhost:8080/Images/${data.image}`} alt="" />
                </Link>
                <div style={{ marginTop: "10px" }}>
                  <p> Name : {data.name}</p>
                  <p>City : {data.city}</p>
                  <p>Date : {data.date}</p>
                  <p>Des : {data.Description}</p>
                </div>
              </div>
            ))
          )
        }

      </div>
    </>

  );
}

export default Home



