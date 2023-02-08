import React, {useEffect , useState} from "react";
import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import Pagination from "../components/Pagination";
import "../App.css"

function ListaPersonajes() {

  const [personaje , setPersonaje] = useState([]);
  const [Info , setInfo] = useState({});

 const initialUrl = "https://rickandmortyapi.com/api/character";

const [busqueda, setBusqueda] =useState("")
const [filtroStatus, setFiltroStatus] = useState("");


  const ListaPersonajes = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setPersonaje(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

  /**Buqueda */
  const buscarPersonajes =(e)=>{
    setBusqueda(e.target.value);
    
  }

  const filtrarStatus=(e)=>{
    setFiltroStatus(e.target.value);
    setBusqueda("");
      } 
      
   
   useEffect(()=>{

   },)
  
  

    const onPrevious = () => {
      ListaPersonajes(Info.prev);

    }

    const onNexts = () => {
      ListaPersonajes(Info.next);
    }
   
   let result=[];

   if(busqueda){
    result = personaje.filter((dato) =>
    dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
   
   }else if(filtroStatus ){
    result = personaje.filter((dato) =>
    dato.status.toLowerCase().includes(filtroStatus.toLocaleLowerCase())
    )
   
   }else{
    result = personaje;
   }


   useEffect(() => {
         ListaPersonajes(initialUrl);


  }, [])



  return (
    <>
<Navbar brand="Rick and Morty App" />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

<div className="filtroBusqueda">
<br></br>
            <label htmlFor="">Busqueda: </label>
            <input value={busqueda} type="text" onChange={buscarPersonajes}/>
​
            <select onChange={filtrarStatus}>
                <option value="Alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Desconocido</option>
            </select>
​
            <div className='row'>
         
            </div>
</div>
 <div className="container mt-5">
   
 <Personaje personaje={result} />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
 </div>
</>
    );
}

export default ListaPersonajes;
