import Image from "next/image";
import React from "react";
import { TbBrandNextjs as Next } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { SiTailwindcss } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { SiChakraui as Chakra } from "react-icons/si";
import PricingUI from "@/components/assets/pricing.png";
const Service = () => {
  const portfolios = [
    {
      id: 1,
      src: PricingUI,
      title: "Pricing UI",
      icons: [Next, Chakra],
      githubLink: "pricing-ui-chakra",
    },
  ];
  return (
    <section
      id="project"
      className="wrapper bg-gradient-to-b from-gray-800 to-black w-full text-white h-screen"
    >
      {/* main div */}
      <div className="py-20 max-w-screen-lg md:text-left text-center">
        {/* Heading */}
        <div className=" font-bold text-4xl border-b-4 border-slate-600   inline">
          Portfolio
        </div>
        <div className="my-4 font-medium text-base">
          Here are my some testimonials:
        </div>
        {/* boxes main style */}
        <div>
          {/* box inner style */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-screen gap-8 px-12 sm:px-0">
            {/* Image */}
            <div className="flex flex-col hover:scale-105 cursor-pointer duration-300">
              <div className="py-2  bg-gradient-to-b from-gray-800 to-black rounded-md ">
                {/* <div className="flex items-center justify-center mb-2 "> */}

                {/* </div> */}
                <div className="flex gap-4 justify-center items-center">
                  <h4 className="text-2xl font-medium ">Pricing UI </h4>
                  <Next className="text-4xl font-bold rounded-full cursor-pointer hover:scale-105 hover:bg-black " />
                  <GoPlus className="text-white font-medium text-2xl" />
                  <Chakra className="text-3xl bg-teal-400 duration-200 font-bold cursor-pointer hover:scale-110 rounded-full" />
                </div>
              </div>
              <div className=" shadow-md shadow-gray-500 rounded-full">
                <Image
                  src={PricingUI}
                  alt="pricing ui"
                  className="rounded-md"
                />
              </div>

              <div className="mt-2 py-2 flex justify-center rounded-md items-center gap-4  bg-gradient-to-b from-gray-800 to-black">
                <a
                  href="https://pricing-ui-chakra-rho.vercel.app/"
                  target={"_blank"}
                  className="bg-black border-2  px-3 py-1.5 rounded-md   duration-300"
                >
                  <BiLinkExternal className="  inline-block" />
                  Demo
                </a>

                <a
                  href={`https://github.com/saad-shamsi/${portfolios[0].githubLink}`}
                  target={"_blank"}
                  className="bg-black border-2  px-3 py-1.5 rounded-md   duration-300"
                >
                  <BiLinkExternal className=" cursor-pointer inline-block " />
                  Github
                </a>
              </div>

              {/* Demo Code */}

              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 border-4 px-6 py-3 m-8 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-30 border-4 px-6 py-3 m-8 duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
