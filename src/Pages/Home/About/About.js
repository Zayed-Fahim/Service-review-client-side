import React from "react";
import boy from "../../../assets/deliveryBoy/boy.jpg";

const About = () => {
  return (
    <div className="container mx-auto my-32">
      <div>
        <h1 className="text-center text-2xl text-blue-600 mb-20 font-bold">
          About Me
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img className="w-[30rem] rounded-lg" src={boy} alt="" />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-8">
            We are qualified <br /> & of experience <br />
            in this field
          </h1>
          <p className="text-[22px]">
            There are many variations of passages of Lorem Ipsum <br />{" "}
            available, but the majority have suffered alteration in some <br />{" "}
            form, by injected humour, or randomized words which don't <br />{" "}
            look even slightly believable. <br />
            <br />
            the majority have suffered alteration in some form, by injected{" "}
            <br />
            humour, or randomized words which don't look even slightly <br />
            believable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
