import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import ListaEpisodios from "../pages/ListaEpisodios";
import Lugares from "../pages/Lugares";
import MiCuenta from "../pages/MiCuenta";
import Desarrolladoras from "../pages/Desarrolladoras";
import ListaPersonajes from "../pages/ListaPersonajes";

import "../App.css";


function Profile(){
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (

        <div className="fondoProfile">

          
        <div className='container-fluid'>
          <div className='row '>
                
                <BrowserRouter> 
                <div className='col col-3 left'>
                  <Navbar />
                </div>
                <div><ListaPersonajes /></div>
                
                <div className='col col-9 right'>
                  <div className="derecha">

                    <div className="contenedorBienvenido">
                    <img className="usser-imagen" src={user.picture} alt={user.name} />
                      <h2 className="usserName">{user.name}</h2>
                      <h1 className="perfilName">Bienvenid@</h1>
                      <p className="usuario-email">{user.email}</p>
                    </div>

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/episodios" element={<ListaEpisodios />} />
                      <Route path="/lugares" element={<Lugares />} />
                      <Route path="/MiCuenta" element={<MiCuenta />} />
                      <Route path="/desarrolladoras" element={<Desarrolladoras />} />
                    </Routes>
                  </div>
                </div>
                
                </BrowserRouter>
                

              
            </div>

          </div>
        </div>
        )
    );
}

export default Profile;