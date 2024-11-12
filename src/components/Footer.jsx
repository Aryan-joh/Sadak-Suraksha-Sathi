import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-primary">
      <ul className="nav col-md-4 justify-content-start list-unstyled d-flex">
        <li className="ms-3">
          <a href="#" className="text-white">
            <RiFacebookCircleFill size={35} className="mx-2" />
          </a>
        </li>
        <li className="ms-3">
          <a href="#" className="text-white">
            <AiFillInstagram size={35} className="mx-2" />
          </a>
        </li>
        <li className="ms-3">
          <a href="#" className="text-white">
            <BsTwitterX size={35} className="mx-2" />
          </a>
        </li>
      </ul>
      <p className="text-center text-white mb-0">© 2024 SADAK SURAKSHA SAATHI</p>
      <div className="col-md-4 d-flex flex-column  text-white">
        <h5>Contact</h5>
        <p className="mb-0 ">+1987856411, +9174569852</p>
        <h5>Email</h5>
        <p className="mb-0">sadaksuraksha@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;

