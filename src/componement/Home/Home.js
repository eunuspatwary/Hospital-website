import React from 'react';
import './Home.css'
import Headers from '../Headers/Headers';
import img1 from '../../image/services/Nephrologist-Care-280x215.jpg'
import img2 from '../../image/services/Facility-Optic-280x215.jpg'
import img3 from '../../image/services/Depositphotos_11882261_original-280x215.jpg'
import img4 from '../../image/services/prenatal-care-280x215.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='backgrounds mb-3'>
            <Headers></Headers>
            <Services></Services>
            <div className='my-5'>
                <h2 className='text-warning pt-4'>
                    OUR SERVICES
                </h2>
                <div className='services'>

                </div>
                <div className='row mx-4'>

                    <div className='col-md-3 text-light'>
                        <img src={img1} alt='' />
                        <h4 className='text-info'>Children Care </h4>
                        <p>Find Children Care. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources.</p>
                    </div>
                    <div className='col-md-3 text-light'>
                        <img src={img2} alt='' />
                        <h4 className='text-info'>Nephrologist Care </h4>
                        <p>Providing World-class Healthcare Services and International Patient Support. Most Experienced Doctor. Advanced Tecnologies.</p>
                    </div>
                    <div className='col-md-3 text-light'>
                        <img src={img3} alt='' />
                        <h4 className='text-info'>Eie and Brain Care </h4>
                        <p>Some types of brain tumours; Other neurological diseases. CONSULTATION & APPOINTMENT. The department provides consultation services in level-3</p>
                    </div>
                    <div className='col-md-3 text-light'>
                        <img src={img4} alt='' />
                        <h4 className='text-info'>Pragnency Care </h4>
                        <p>Women cancer screening, diagnosis and treatment. available 24/7. emergency services. </p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Home;