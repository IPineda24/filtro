import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { HiOutlineHome} from 'react-icons/hi';
import { FaAsterisk} from 'react-icons/fa';
import { GrLocation} from 'react-icons/gr';
import { AiOutlineUser} from 'react-icons/ai';
import { HiOutlineInformationCircle} from 'react-icons/hi';
import logo from "../img/logo.jpeg";

function Navbar() { 
    return (
        <>
        <div className="contenedorPrincipal">
        <header className="nav-contenedor">  
             <nav className="barra_menu" >
                 <div className="imagen-contenedor">
                     <img className="menu-imagen" alt="logo" src={logo}/>
                 </div>
                 <ul className="menuNav">
                     <li className="menuItem">
                         <HiOutlineHome  className="menu-icono" />
                         <Link to="/" className="linkMenu"> Home   </Link>
                     </li>
                     <li className="menuItem">
                         <FaAsterisk  className="menu-icono" />
                         <Link to="/episodios" className="linkMenu">  Episodios</Link>
                     </li >
                     <li className="menuItem">
                         <GrLocation   className="menu-icono"/>
                         <Link to="/lugares" className="linkMenu">  Lugares</Link>
                     </li>
                     
                 </ul>

                 <ul className="menuNav">
                 <li className="menuItem">
                     <AiOutlineUser  className="menuIcono-Inferior " />
                     <Link to="/miCuenta" className="linkInferior">Mi Cuenta</Link>
                     </li>
                     <li className="menuItem">
                         <HiOutlineInformationCircle   className="menuIcono-Inferior" />
                     <Link to="/desarrolladoras" className="linkInferior ">Desarrolladoras</Link> 
                     </li>
                 </ul>
             </nav>
         </header>
        </div>
     </>

    );
}

export default Navbar;