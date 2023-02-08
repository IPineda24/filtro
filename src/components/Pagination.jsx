import React from 'react'

const Pagination = ({prev, next , onPrevious, onNexts}) => {


   
        const anterior = () =>{
            onPrevious();
        }

        const siguiente = () =>{
            onNexts();
        }




  return (
    <div>
        <br />
      <nav className='my-4'>
        <ul className='pagination justify-content-center'>
            { prev ? (
                <li className='page-item'>
                <button className='page-link' onClick={anterior}>Previous</button>
            </li>
            ) : null }
           { next ? (
                 <li className='page-item'>
                 <button className='page-link' onClick={siguiente}>Nexts</button>
             </li>
                ): null }
           
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;
