import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login(){
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="fondoLogin">
            <div className="header">
                <h1 className='Bienvenidos'>Bienvenidos a la fan page de</h1>
                <p className='Bienvenidos-p'>Rick & Morty</p>
                <button class="btn-login1 btn-outline-dark" onClick={ () => loginWithRedirect() }> Iniciar Sesion</button>
            </div>
        
</div>)}

export default Login;