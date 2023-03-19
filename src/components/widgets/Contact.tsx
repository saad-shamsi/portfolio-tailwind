import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact" className="wrapper antialiased bg-cyan-700 h-full ">
      <div className="flex  flex-1 justify-between gap-6 py-6 md:flex-row flex-col md:text-left text-center  ">
        <div className="space-y-4 ">
          <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
          <p className="pt-2 text-cyan-100 text-base md:max-w-md max-w-none ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            perferendis voluptate eos provident dicta ducimus quibusdam ea
            deserunt cum quis.
          </p>

          <div className="p-4 bg-red-400  flex flex-col gap-4 rounded-xl shadow-xl ">
            <a href="https://wa.me/92333283945" target="_blank">
              <div className="flex justify-center items-center p-4 bg-slate-400 flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <IoLogoWhatsapp className=" text-green-600 text-3xl " />
                </div>
                <div className=" text-2xl font-semibold pt-3">Whatsapp</div>
                <div>+92 333 2839 452</div>
                <div className="font-light ">Send a Message</div>
              </div>
            </a>
            <a href="mailto:saadshamsi13@gnail.com">
              <div className="flex justify-center items-center p-4 bg-slate-400 flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <MdEmail className=" text-blue-600 text-3xl " />
                </div>
                <div className=" text-2xl font-semibold pt-3">Email</div>
                <div>saadshamsi@gmail.com</div>
                <div className="font-light">Send a Message</div>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/Gulistan-e-Johar,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.9199645,67.1191429,14z/data=!3m1!4b1!4m6!3m5!1s0x3eb338fa00456acf:0x7a277bdfeb6b99aa!8m2!3d24.9204194!4d67.1343848!16zL20vMGI5ODJs"
              target="_blank"
            >
              <div className="flex justify-center items-center p-4 bg-slate-400 flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <FaLocationArrow className="  text-2xl " />
                </div>
                <div className=" text-2xl font-semibold pt-3">Location</div>
                <div>Karachi,Pakistan</div>
                <div className="font-light">Let us meet!</div>
              </div>
            </a>
            {/* icons section */}
            <div className=" mt-3 flex  gap-4 text-2xl font-bold cursor-pointer  justify-center">
              <FiInstagram />
              <FaFacebookF />
              <FaTwitter />
              <BsLinkedin />
            </div>
          </div>

          {/* parent div end */}
        </div>

        {/* contact-section */}

        <div
          className="bg-black
         rounded-xl shadow-2xl p-8 text-white  flex lg:mr-28 mr-0   md:mt-none mt-20 h-full self-center"
        >
          <form action="" className="space-y-4 ">
            <div>
              <label htmlFor="" className="text-sm ">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                        focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email.."
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
                placeholder="Message.."
                className="ring-1 ring-gray-300 w-full rounded-md max-h-32 px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm ">
              Send Messages
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

{
  /* Parent div */
}
{
  /* <div
          className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0  gap-y-6    p-8
        sm:p-12  text-white "
        > */
}

{
  /* <div className="p-4 bg-red-400 flex gap-2">
<div>
  <SiGmail className=" text-black text-2xl" />
</div>
<div>saadshamsi13@gmail.com</div>
</div>
<div className="p-4 pr-none  bg-red-400 flex gap-2">
<div>
  <FaLocationArrow className=" text-black text-2xl" />
</div>
<div>Karachi,Pakistan </div>
</div> */
}
