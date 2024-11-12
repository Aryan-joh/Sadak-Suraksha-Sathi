import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import Logo from '../assets/Logo.png'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import TranslateMain from './TranslateMain';
const Translate = () => {
  return (
    <div>
    {/* Top navigation with logo */}
    <nav className="py-2 bg-light border-bottom">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="Logo" className="bg-transparent" width="60" height="50" />
        <span className="mt-2 fw-bold" style={{ fontSize: '1.2rem', color: '#000' }}>
          Sadak Suraksha Saathi
        </span>
      </div>
    </div>
  </nav>

  {/* Header with "Back Home" and navigation links */}
  <header className="py-3 mb-4 border-bottom bg-primary">
    <div className="container">
      <div className="row align-items-center">
        {/* "Back Home" link on the left */}
        <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
        <Link to='/'  className="nav-link link-dark px-2 text-white"> Back Home </Link>
        </div>

        {/* Navigation links on the right */}
        <div className="col-12 col-md-6 text-md-end">
          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2 text-white">Govt Sites</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2 text-white">Rules</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2 text-white">Policy</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2 text-white"><FaUserCircle size={30} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <TranslateMain/>
  <Footer></Footer>
</div>
  )
}

export default Translate
