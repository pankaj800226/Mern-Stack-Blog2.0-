import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Header = () => {

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

        toggleIcon === 'nav__toggler'
            ? setToggleIcon('nav__toggler toggle')
            : setToggleIcon("nav__toggler")
    };
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));

    const logOut = () => {
        localStorage.clear('user')
        navigate('/login')
    }

    const [searchTerm, setSearchTerm] = useState("");




    return (
        <>
       
            <nav className="nav">
                <Link to="/" className='nav__brand'>My Blog</Link>
                <ul className={active}>

                    <Link to="/addblog">add Blog</Link>
                    <Link to="/profile">Profile</Link>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <p>{user?.email}</p>
                    <div className="auth_btn">

                        {
                            user && <button className="logoutBtns" onClick={logOut}>Logout</button>
                        }
                    </div>
                </ul>

                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </>
    )
}

export default Header