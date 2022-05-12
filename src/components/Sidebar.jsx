import React from 'react'
import {
    FaBars
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = (children) => {
    const menuItem=[
        {
            path:"/",
            name:"Dashboard"
        },
        {
            path:"/about",
            name:"About"
        },
        {
            path:"/comment",
            name:"Comment"
        },
        {
            path:"/analytics",
            name:"Analytics"
        },
        {
            path:"/product",
            name:"Product"
        },
        {
            path:"/productlist",
            name:"ProductList"
        },
    ]
  return (
    <div className="container">
      <div className="sidebar">
          <div className="top_section">
              <div className="bars">
                  <FaBars/>
              </div>
          </div>
          {
              menuItem.map((item, index)=>(
                  <NavLink to={item.path} key={index} className="link" activeclassName="active">
                      <div className="link_text">{item.name}</div>
                  </NavLink>


              ))
          }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
