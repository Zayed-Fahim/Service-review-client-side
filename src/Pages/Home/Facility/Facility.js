import React from 'react';

const Facility = ({ facility }) => {
    const { name,icon } = facility;
    return (
      <div className="mt-20 h-[156px] w-[170px] border-[2px] rounded-xl flex flex-col justify-around items-center hover:bg-purple-500">
        <div>
          {icon}
        </div>
        <div>
          <h1 className="text-[16px] hover:text-white font-semibold">{name}</h1>
        </div>
      </div>
    );
};

export default Facility;