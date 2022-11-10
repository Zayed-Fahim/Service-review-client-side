import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilteredService from '../Service/FilteredService';


const FilteredServices = () => {
    const [filteredServices, setFilteredServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services/filtered")
            .then(res => res.json())
            .then(data => setFilteredServices(data))
    },[])
    return (
      <div>
        <div className="flex container mx-auto justify-between mt-32 mb-20">
          {filteredServices.map((filteredService) => (
            <FilteredService
              key={filteredService.service_id}
              filteredService={filteredService}
            ></FilteredService>
          ))}
        </div>
        <div className="text-center mb-32">
          <Link to="/services">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View All Services
            </button>
          </Link>
        </div>
      </div>
    );
};

export default FilteredServices;