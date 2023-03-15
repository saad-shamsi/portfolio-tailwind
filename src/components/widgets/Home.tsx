import React from "react";
import Image from "next/image";
import Profile from "@/components/assets/profile.webp";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Home = () => {
  const me = "it's";
  return (
    <section className="wrapper bg-gradient-to-r from-slate-500 to-stone-500  ">
      <div className="flex lg:pt-none pt-8 md:flex-row  flex-col items-center flex-1 justify-between lg:mx-24 md:mx-10 lg:gap-2  gap-x-8 gap-y-10">
        {/* Left Content */}
        <div className="">
          {/* <div className=" relative top-0 right-0 w-44 h-44  bg-[#5444e0] blur-3xl rounded-full z-0 inline-block"></div>  */}
          <h4 className="text-4xl font-bold  ">Hey! {me} me,</h4>
          <h1 className="mt-2 font-bold text-6xl max-w-sm text-white">
            Saad Shamsi
          </h1>

          {/* <div className="w-[86] h-[86] rounded-full bg-blue-700 blur-3xl relative z-20 "></div> */}

          <h4 className="mt-2 text-3xl lg:text-2xl font-semibold text-cyan-400   ">
            Frontend Developer | Web Designer{" "}
          </h4>
          <p className="mt-3 text-lg text-center font-medium  max-w-lg text-purple-700">
            *Bringing ideas to life with code and creativity.
          </p>
          {/* icons */}
          <div className="mt-16 text-3xl text-white flex font-bold gap-8 cursor-pointer mx-10 ">
            <div className="p-3 ring-2 rounded-full hover:bg-blue-600  duration-300">
              <FaFacebookF className="  " />
            </div>
            <AiOutlineInstagram className=" " />
            <FaLinkedinIn className="" />
            <BsTwitter className="" />
          </div>
        </div>
        {/* Right COntent/Image */}

        <div className="">
          <Image
            src={Profile}
            alt="Profile picture"
            className=" md:my-28  xl:mr-16 md:w-80 w-60  rounded-lg border-black  ring-4 ring-red-500 shadow-2xl 
"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Home;
