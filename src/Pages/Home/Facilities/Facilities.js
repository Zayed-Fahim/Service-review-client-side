import Facility from "../Facility/Facility";
import { FcClock, FcServices } from "react-icons/fc";
import { BiDollar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
const Facilities = () => {
  const facilities = [
    {
      id: 1,
      icon: <FcClock className="h-16 w-16"></FcClock>,
      name: "Availability",
    },
    {
      id: 2,
      icon: <FcServices className="h-16 w-16"></FcServices>,
      name: "Quality Service",
    },
    {
      id: 3,
      icon: <BiDollar className="h-16 w-16"></BiDollar>,
      name: "Quality Cost Service",
    },
    {
      id: 4,
      icon: <AiOutlineClockCircle className="h-16 w-16"></AiOutlineClockCircle>,
      name: "Timely Delivery",
    },
    {
      id: 5,
      icon: <GrMapLocation className="h-16 w-16"></GrMapLocation>,
      name: "Real Time Location",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl text-blue-600 mb-10 font-bold">
          Core Features
        </h1>
        <h1 className="text-center text-5xl font-bold my-5">Why Choose Us</h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="container mx-auto mb-32 flex justify-between">
        {facilities.map((facility) => (
          <Facility facility={facility} key={facility.id}></Facility>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
