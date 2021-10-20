import React from 'react';
import { Link } from 'react-router-dom';
import './Servic.css'

const Servic = ({doctor}) => {
  const {id,name,specialist,qualifications,img,description}=doctor;
    return (
        
        <div className="col  ">
    <div className=" card  item ">
      <img className=' p-3 card-img ' src={img}  alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5> specialist:{specialist}</h5>
        <h6>Qualifications:{qualifications}</h6>
        <p className="card-text">{description.slice(0,60)}</p>
       <Link to={`/details/${id}`}>
       <button className='btn '>Details</button>
       </Link>
      </div>
    </div>
  </div>
    );
};

export default Servic;