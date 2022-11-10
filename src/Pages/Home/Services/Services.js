import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className='mb-32 mt-20'>
            <div className=''>
                <h1 className='text-center text-2xl font-bold text-blue-700'>Services</h1>
                <h1 className='text-center text-5xl font-bold my-5'>My Service Area</h1>
                <p className='text-center'>
                    The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. 
                </p>
            </div>
            <div className='grid grid-cols-3 container mx-auto'>
                {
                    services?.map(service => <Service key={service.service_id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;