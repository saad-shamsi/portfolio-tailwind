import Image from "next/image";
import React from "react";
import html from "@/components/assets/html.png";
import css from "@/components/assets/css.png";
import javascript from "@/components/assets/javascript.png";
import react from "@/components/assets/react.png";
import tailwind from "@/components/assets/tailwind.png";
import node from "@/components/assets/node.png";
import github from "@/components/assets/github.png";
import nextjs from "@/components/assets/nextjs.png";
import chakra from "@/components/assets/chakra.png";
import git from "@/components/assets/git2.png";
import typescript from "@/components/assets/typescript.jpg";

interface tech {
  id: number;
  src: any;
  title: string;
  style: string;
}
const MyExperience = () => {
  const techStack: tech[] = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: react,
      title: "React.js",
      style: "shadow-slate-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 9,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-teal-700",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },

    {
      id: 11,
      src: github,
      title: "Github",
      style: "shadow-teal-700",
    },
  ];

  return (
    <section id="work wrapper">
      <div className="bg-gradient-to-b from-gray-800 to-black w-full  pt-20 ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  h-full text-white ">
          <div>
            <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
              Experience
            </h2>
            <p className="py-6 ">
              Threse are the technologies I have worked with
            </p>
          </div>
          <div className="w-full grid sm:justify-center sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {techStack.map(({ id, src, title, style }) => {
              return (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg z-10 w-80 ${style}`}
                >
                  <Image
                    src={src}
                    alt="programming languages"
                    className="w-24 mx-auto"
                  />
                  <p className="mt-4">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
