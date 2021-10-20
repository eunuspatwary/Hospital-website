import React from 'react';


import { Carousel } from 'react-bootstrap';
import './Headers.css'
import img1 from '../../image/2nd.jpg'
import img2 from '../../image/pexels-chokniti-khongchum-2280551.jpg'
import img3 from '../../image/3rd.jpg'

const Headers = () => {
  
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img head-img"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='captions'>
                    <h2>WE WILL HELP YOU TO BECOME HEALTHY</h2>
                    <p className='text-dark'>Fringilla risus nec, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien at pretium luctus ligula.</p>
                 
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img head-img"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                   <div className='captions'> <h3>HIGHEST QUALITY MEDICAL TREATMENT</h3>
                    <p className='text-light'>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium and lorem primis in integer mollis pretium purus pretium ligula.</p></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img head-img"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                   <div className='captions'>
                   <h3>SOLUTIONS TO COMPLEX MEDICAL PROBLEMS</h3>
                    <p className='text-dark'>Fringilla risus nec, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien at pretium luctus ligula luctus

Quaerat sodales sapien undo euismod purus a blandit pretium

Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna risus.</p>
                   </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Headers;