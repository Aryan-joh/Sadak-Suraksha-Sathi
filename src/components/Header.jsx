import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div>
<nav className="py-2 bg-light border-bottom">
    <div className="container d-flex flex-wrap justify-content-between">
    <div className=" d-flex  ">
    <img src={Logo} alt="Logo" className="bg-transparent " width="60" height="50"  ></img>
    <span className="mt-2 fw-bold" style={{ fontSize: '1.2rem', color: '#000' }}>
            Sadak Suraksha Saathi
          </span>
          
   </div>
      <ul className="nav">
        <li className="nav-item fw-bold"><Link to='#' className="nav-link link-dark px-2">Sign up </Link></li>
       
        <li className="nav-item fw-bold"><Link to="/login" className="nav-link link-dark px-2">Log in</Link></li>

        <li className="nav-item"><a href="#" className="nav-link link-dark px-2"><FaUserCircle size={30}/></a></li>
      </ul>
    </div>
  </nav>
 

  <header className="py-3 mb-4 border-bottom  bg-primary">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Nav links on the right for larger screens, stacking above search on smaller screens */}
      <div className="col-12 col-md-6 order-1 order-md-2 text-md-end mb-3 mb-md-0">
        <ul className="nav justify-content-center justify-content-md-end">
          <li className="nav-item">
            <Link to='/' className="nav-link px-2 active text-white" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/translate" className="nav-link link-dark px-2  text-white">Translate</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-dark px-2 text-white">About</a>
          </li>
        </ul>
      </div>

      {/* Search box on the left side for larger screens */}
      <div className="col-12 col-md-6 order-2 order-md-1">
        <form className="d-flex">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search Keyword , Phrases "
            aria-label="Search"
      
          />
          <button className="btn btn-outline-success btn-warning " type="submit">
            Search
          </button>
        </form>
      </div>

    </div>
  </div>
</header>


 
    </div>
  )
}

export default Header
