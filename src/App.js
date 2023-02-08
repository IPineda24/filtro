import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Location from 'react-bootstrap';
import ListaPersonajes from './pages/ListaPersonajes';
//import Desarrolladoras from './pages/Desarrolladoras';
//


function App() {
  const{isAuthenticated}=useAuth0();
  return (
    <>
    <div className='contenido-App'>
      {isAuthenticated ? (
     
     
     

     <div className="contenedorPrincipal">
        
         <Profile></Profile> 
         
     </div>
    
    
      ):(
      
      <div className="fondoLogin"> 
        <Login />
      
      </div>
    
    
      ) }

    </div>

    </>
  );
}

export default App;