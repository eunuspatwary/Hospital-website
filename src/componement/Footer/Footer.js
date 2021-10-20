import React from 'react';


const Footer = () => {
    return (
        <div className='bg-dark text-white text-center '>
            <div className='p-4'> <h4>Apollo Hospital</h4> </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <p>Bangladesh, CA 94102, Dhaka</p>
                    <p>1234 Some St</p>
                </div>
                <div className="col-md-3">
                    <p>Phone: 800 123 4567</p>
                    <p>Fax: 1.800.123.4566</p>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>
    );
};

export default Footer;