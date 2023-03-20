import React from "react";
import Image from "next/image";
import Profile from "@/components/assets/profile.webp";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button from "../shared/Button";

const Home = () => {
  const me = "it's";
  const buttonText = "Let's Talk";
  return (
    <section
      id="home"
      className="wrapper bg-gradient-to-b from-gray-800 to-black  "
    >
      <div className="flex lg:pt-none pt-8 md:flex-row  flex-col items-center flex-1 justify-between lg:mx-24 md:mx-10 lg:gap-2  gap-x-8 gap-y-10">
        {/* Left Content */}
        <div className="text-center min-[768px]:text-left">
          {/* <div className=" relative top-0 right-0 w-44 h-44  bg-[#5444e0] blur-3xl rounded-full z-0 inline-block"></div>  */}
          <h4 className="text-4xl font-bold  text-cyan-400 ">Hey! {me} me,</h4>
          <h1 className="mt-2 font-bold text-6xl  text-white">Saad Shamsi</h1>

          {/* <div className="w-[86] h-[86] rounded-full bg-blue-700 blur-3xl relative z-20 "></div> */}

          <h4 className="mt-2 text-3xl lg:text-2xl font-semibold text-cyan-400   ">
            Frontend Developer | Web Designer{" "}
          </h4>
          <p className="mt-3 text-lg text-center font-medium  max-w-lg text-teal-400">
            *Bringing ideas to life with code and creativity.
          </p>
          <div className="my-6 flex justify-around">
            <Button text={buttonText} />
          </div>
          {/* icons */}
          <div className="mt-8 text-white flex font-bold gap-8 cursor-pointer mx-5 justify-center">
            <div className="p-3 ring-2 rounded-full hover:bg-blue-600  duration-300">
              <a
                href="https://www.facebook.com/profile.php?id=100085458046949"
                target="blank"
              >
                {" "}
                <FaFacebookF className="sm:text-3xl text-2xl" />
              </a>
            </div>
            <a href="https://www.instagram.com/" target="blank">
              <div className="p-2 ring-2 rounded-full hover:bg-gradient-to-bl from-[#5851D8] via-[#E1306C] to-[#C13584] duration-300">
                <AiOutlineInstagram className=" sm:text-4xl text-3xl " />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/saad-shamsi-4b92a6232/"
              target="blank"
            >
              <div className="p-3 ring-2 rounded-full hover:bg-[#0A66C2] duration-300">
                <FaLinkedinIn className="sm:text-3xl text-2xl" />
              </div>
            </a>
            <a href="https://twitter.com/SaadShamsi09" target="blank">
              <div className="p-3 ring-2 rounded-full hover:bg-[#00acfe] ">
                <BsTwitter className="sm:text-3xl text-2xl" />
              </div>
            </a>
          </div>
        </div>
        {/* Right COntent/Image */}

        <div className="pb-4">
          <Image
            src={Profile}
            alt="Profile picture"
            className="  md:my-28  xl:mr-16 md:w-80 w-60  rounded-lg border-black  ring-4 ring-red-500 shadow-2xl transition hover:-translate-y-3 cursor-pointer duration-1000
"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Home;
