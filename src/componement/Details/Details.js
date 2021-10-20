import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
   
    const { doctorId } = useParams();

    const [doctorDetails, setDoctorDetails] = useState([]);

  const [singleDoctor, setSingleDoctor] = useState({});

  //  data load howa
  useEffect(() => {
    fetch('/services.JSON')
      .then((res) => res.json())
      .then((data) =>setDoctorDetails(data));
      
  }, []);

//   // call hbe jokon amar shob data load hye state e set hbe
  useEffect(() => {
    const foundEmployee = doctorDetails.find
      (employee => employee.id === JSON.parse(doctorId))
      console.log(foundEmployee)
    
      setSingleDoctor(foundEmployee);
  }, [doctorDetails]);

//     console.log(doctorId)
    return (
        <div className='row mx-4 my-5'>
          <div className='detail  col-md-6'>
          
          <img className='img-fluid' src={singleDoctor?.img}/>
          <h2>  {singleDoctor?.name}</h2>
          <h4>qualifications: {singleDoctor?.qualifications}</h4>
          <p>description: {singleDoctor?.description}</p>
          <Link to='/services'><button className='btn my-3'>Go Servic</button></Link>
          </div>
        </div>
    );
};

export default Details;