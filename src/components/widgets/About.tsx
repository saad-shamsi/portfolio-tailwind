import Image from "next/image";
import React from "react";
import Photo from "@/components/assets/profile.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const About = () => {
  return (
    <section
      id="about"
      className=" bg-white mx-auto max-w-screen-2xl  grid md:grid-cols-2 grid-cols"
    >
      <div className=" text-white bg-gradient-to-b  from-gray-800 to-black  flex flex-col justify-center items-center gap-10 py-10">
        <Image src={Photo} alt="" />
        <div className="text-center flex  flex-col gap-3">
          <h2 className="font-bold text-5xl">Saad Shamsi</h2>
          <p className=" font-light text-2xl  ">Web Developer</p>
        </div>
        <button className="font-bold text-xl px-10 py-4 border-blue-100 border-2  hover:translate-y-2 hover:outline-1 duration-300 text-white rounded-full">
          Email me
        </button>
        <div className=" mt-6 flex gap-6 text-4xl font-bold">
          <FiInstagram />
          <FaFacebookF />
          <FaTwitter />
          <BsLinkedin />
        </div>
      </div>
      {/*       end */}

      <div className=" flex w-full bg-[#1a2340] flex-col text-white items-center justify-center pb-8 pt-8">
        <div className="flex gap-5 flex-col  flex-center items-center">
          <h1 className="font-bold md:text-6xl text-5xl ">About Me</h1>
          <p className="md:text-left px-6 text-center text-xl font-2xl md:max-w-md max-w-none">
            I am a tech-savvy individual open to work as a fromt-end developer.
            I am passionate about consistently advancing my knowledge and
            skills. I have attended multiple seminars and boot camps on coding
            and UI/UX development
          </p>
        </div>
        <div className="flex gap-16 lg:mt-24 mt-12 ">
          <button className="font-bold text-xl px-4 md:px-10 md:py-4 py-2 border-blue-100 border-2  hover:translate-y-2 hover:outline-1 duration-300 text-white rounded-full">
            Portfolio
          </button>
          <button className="font-bold text-xl px-4 md:px-10 md:py-4 py-2 border-blue-100 border-2  hover:translate-y-2 hover:outline-1 duration-300 text-white rounded-full ">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
