import React, {useEffect , useState} from "react";
//import Navbar from "../components/Navbar";
import Episode from "../components/Episode";
import Pagination from "../components/Pagination";

function ListaEpisodios() {

  const [episode , setEpisode] = useState([]);
  const [Info , setInfo] = useState({});

 const initialUrl = "https://rickandmortyapi.com/api/episode";


  const ListEpisode = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setEpisode(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

    const onPrevious = () => {
      ListEpisode(Info.prev);

    }

    const onNexts = () => {
      ListEpisode(Info.next);
    }

   useEffect(() => {
         ListEpisode(initialUrl);


  }, [])

  return (
    <>
 {/**<Navbar brand="Rick and Morty App" />*/}

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

 <div className="container mt-5">
   
 <Episode episode={episode} />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
 </div>
</>

    );
}

export default ListaEpisodios;