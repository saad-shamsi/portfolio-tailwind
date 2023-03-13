import Image from 'next/image'
import React from 'react'
import Photo from "@/components/assets/photo.webp"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
const About = () => {
  return (
<section className='grid min-[936px]:grid-cols-[40%,60%] max-[936px]:grid-flow-cols h-screen  bg-slate-300 '>
       <div className=' bg-red-300  p-auto flex flex-col justify-center items-center gap-10 py-10'>
       <Image src={Photo} alt="" />
       <div className='text-center flex  flex-col gap-3'>
       <h2 className='font-bold text-3xl'>Leon France (he/him)</h2>
       <p className=' font-light text-xl  '>Web Developer</p>
       
       </div>
       <button className='font-bold text-xl px-16 py-4 bg-black text-white rounded-full'>Email me</button>
       <div className=" mt-6 flex gap-6 text-4xl font-bold">
        <FiInstagram/>
        <FaFacebookF/>
        <FaTwitter/>
        <BsLinkedin />

       </div>
       </div>
       <div className=' bg-teal-200 pb-24 flex flex-col items-center justify-center pt-8'>
        <div className='flex gap-5 flex-col  flex-center items-center'>
          <h1 className='font-bold text-6xl  '>About Me</h1>
          <p className='text-left text-xl font-2xl max-w-md'>I am a tech-savvy individual with a Bachelors degree in Software Development, seeking employment as a mobile game developer. I am passionate about consistently advancing my knowledge and skills. I have attended multiple seminars and boot camps on coding and game development</p>
        </div>
        <div className='flex gap-16 lg:mt-24 md:mt-12 '>
        <button className='font-bold text-xl px-16 py-4 bg-black text-white rounded-full'>Portfolio</button>
        <button className='font-bold text-xl px-16 py-4 bg-black text-white rounded-full'>Resume</button>
        </div>
       
       </div>
</section>
  )
}

export default About