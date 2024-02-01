import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Form from '../EventsnForms/Forms';
import '../TopHeader/Header.css';
import Bloger from './Blog';
import Contact from './Contact';

function Header() {
  return (
    //-"BrowserRouter" is used to define the router.
    //-"Link" is used to define the link.
    //-"Routes" is used to define the routes.
    //-"Route" is used to define the route.
    //-"path" will be same as "to" in Link. It defines the path of the component.
    //-"element" is the component that will be rendered when the path matches.

    
  
    
    <BrowserRouter>
    <nav className="top-nav">
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li  >
            <Link to="/Bloger">Blogs</Link>
          </li>
          <li  >
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Bloger" element={<Bloger />} />
          <Route path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

  );
}

export default Header;