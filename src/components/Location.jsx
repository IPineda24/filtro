import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


const Location = ({locations= []}) => {
  return (
    <>
    <br />
    <br />
    <br />


    <div className="container col-12 m-5" >
         <div className="row">
      
      {locations.map((item, index) => (
      <div key={index} className='col' >
        <div className='card' style={{width: " 18rem"}}>
          <img  className="card-img-top" src={item.image} alt="" />
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <hr />
            <p  className="card-text">Origin  : {item.origin.name} </p>
            <p  className="card-text">Location :{item.location.name} </p>
            <p className="card-text">Type :{item.type} </p>
          
           
          
          </div>

        </div>
      <br />
      </div>
      
        ))}
      

    </div>
    </div>
    </>
  )
}

export default Location;
