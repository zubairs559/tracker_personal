import React, { useState } from 'react';
import {
  FaHome,
  FaSmoking,
  FaDumbbell,
  FaBars,
  FaTshirt,
  FaReadme,
  FaRegUser,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/smoking",
      name: "Smoking",
      icon: <FaSmoking />
    },
    {
      path: "/excercise",
      name: "Excercise",
      icon: <FaDumbbell />
    },
    {
      path: "/dress",
      name: "Dress",
      icon: <FaTshirt />
    },
    {
      path: "/studies",
      name: "Studies",
      icon: <FaReadme />
    },
    {
      path: "/sign-in",
      name: "Login",
      icon: <FaRegUser />
    }
  ];
  return (
    <div>
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Tracker</h1>
            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
