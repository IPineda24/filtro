import React, {useEffect , useState} from "react";
//import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Pagination from "../components/Pagination";

function Lugares() {

  const [locations , setLocations] = useState([]);
  const [Info , setInfo] = useState({});

 const initialUrl = "https://rickandmortyapi.com/api/character";


  const PersonLocation = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setLocations(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

    const onPrevious = () => {
      PersonLocation(Info.prev);

    }

    const onNexts = () => {
      PersonLocation(Info.next);
    }

   useEffect(() => {
         PersonLocation(initialUrl);


  }, [])

  return (
    <>
    
      {/**<Navbar brand="Rick and Morty App" />*/}

      <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

      <div className="container mt-5">
        
      <Location locations={locations} />

      <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
      </div>

      
    </>
  

    );
}

export default Lugares;
