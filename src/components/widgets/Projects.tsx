import Image, { StaticImageData } from "next/image";
import React from "react";
import { TbBrandNextjs as Next } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { SiTailwindcss as tailwind } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { SiChakraui as Chakra } from "react-icons/si";
import { ImHtmlFive as html } from "react-icons/im";
import { DiCss3 as css } from "react-icons/di";
import { GrReactjs as react } from "react-icons/gr";
import { SiTypescript as typescript } from "react-icons/si";
import PricingUI from "@/components/assets/pricing.png";
import { IconType } from "react-icons/lib";
import usability from "@/components/assets/usability.png";
import panverse from "@/components/assets/panaverse-tailwind.png";
import textUtils from "@/components/assets/text-utils.png";
import gallery from "@/components/assets/gallery.png";
import panverseChakra from "@/components/assets/panaverse-cakra.png";
import blog from "@/components/assets/blog.png";
import todo from "@/components/assets/todo.png";
import signup from "@/components/assets/signup.png";

interface Portfolio {
  id: number;
  src: StaticImageData;
  title: string;
  icons: IconType[];
  githubLink: string;
  demoLink: string;
}
const Service = () => {
  const portfolios: Portfolio[] = [
    {
      id: 1,
      src: PricingUI,
      title: "Pricing UI",
      icons: [Next, Chakra],
      githubLink: "https://github.com/saad-shamsi/pricing-ui-chakra",
      demoLink: "https://pricing-ui-chakra-rho.vercel.app/",
    },
    {
      id: 2,
      src: usability,
      title: "Landing Page",
      icons: [html, css],
      githubLink: "https://github.com/saad-shamsi/landing-page",
      demoLink: "https://usability-hub-push.surge.sh/",
    },
    {
      id: 3,
      src: panverse,
      title: "Panaverse DAO",
      icons: [Next, tailwind, typescript],
      githubLink: "https://github.com/saad-shamsi/panaverse-web-tailwind",
      demoLink: "https://panaverse-dao-saad.vercel.app",
    },
    {
      id: 4,
      src: textUtils,
      title: "Text-Utils",
      icons: [react, Chakra],
      githubLink: "https://github.com/saad-shamsi/Text-utils-React",
      demoLink: "https://panaverse-dao-saad.vercel.app",
    },
    {
      id: 5,
      src: todo,
      title: "Todo App",
      icons: [Next, Chakra],
      githubLink: "https://github.com/saad-shamsi/todo-app-next.js",
      demoLink: "https://todoapp-nextjs-eight.vercel.app/",
    },
    {
      id: 6,
      src: gallery,
      title: "Animated Gallery",
      icons: [css],
      githubLink: "https://github.com/saad-shamsi/animated-gallery",
      demoLink: "https://animated-gallery.surge.sh/",
    },
    {
      id: 7,
      src: blog,
      title: "Next.js Blog",
      icons: [Next, typescript],
      githubLink: "https://github.com/saad-shamsi/nextjs-blog",
      demoLink: "https://nextjs-blog-five-blond.vercel.app/",
    },
    {
      id: 8,
      src: panverseChakra,
      title: "Panaverse",
      icons: [Next, Chakra],
      githubLink: "https://github.com/saad-shamsi/panaverse-web-",
      demoLink: "https://panaverse-web-alpha.vercel.app/",
    },
    {
      id: 9,
      src: signup,
      title: "Signup window",
      icons: [Next, Chakra],
      githubLink: "https://github.com/saad-shamsi/Signup-Window",
      demoLink: "signup-window.surge.sh",
    },
  ];
  return (
    <section
      id="project"
      className="pt-20 wrapper mx-auto min-w-fit  md:px-28 px-5  bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      {/* main div */}
      {/* <div className="py-20 max-w-screen-lg md:text-left text-center"> */}
      {/* Heading */}
      <div className="text-center md:text-start min-w-fit">
        <div className=" font-bold  text-4xl border-b-4 border-slate-600   inline">
          Portfolio
        </div>
        <div className="my-4 font-medium text-base">
          Here are my some testimonials:
        </div>
      </div>

      {/* boxes main style */}
      <div>
        {/* box inner style */}
        <div className="grid lg:grid-cols-3  sm:grid-cols-2 pb-8 md:gap-none  gap-8 ">
          {/* Image */}
          {portfolios.map(({ id, title, src, icons, githubLink, demoLink }) => {
            return (
              <div
                key={id}
                className="flex flex-col hover:scale-105 cursor-pointer duration-300"
              >
                <div className="py-2  bg-gradient-to-b from-gray-800 to-black rounded-md ">
                  {/* <div className="flex items-center justify-center mb-2 "> */}

                  {/* </div> */}
                  <div className="flex gap-6 justify-center items-center">
                    <h4 className="text-2xl font-medium ">{title} </h4>
                  </div>
                </div>
                <div className=" shadow-md shadow-gray-500 rounded-full">
                  <Image src={src} alt="pricing ui" className="rounded-md" />
                </div>

                <div className="mt-2 py-2 flex justify-center rounded-md items-center gap-4  bg-gradient-to-b from-gray-800 to-black">
                  <a
                    href={demoLink}
                    target={"_blank"}
                    className="bg-black border-2  px-3 py-1.5 rounded-md   duration-300"
                  >
                    <BiLinkExternal className="  inline-block" />
                    Demo
                  </a>

                  <a
                    href={githubLink}
                    target={"_blank"}
                    className="bg-black border-2  md:px-3 px-2  md:py-1.5 py-1 rounded-md   duration-300"
                  >
                    <BiLinkExternal className=" cursor-pointer inline-block " />
                    Github
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;

{
  /* Demo Code */
}

{
  /* <div className="flex items-center justify-center">
                  <button className="w-1/2 border-4 px-6 py-3 m-8 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-30 border-4 px-6 py-3 m-8 duration-200 hover:scale-105">
                    Code
                  </button>
                </div> */
}
