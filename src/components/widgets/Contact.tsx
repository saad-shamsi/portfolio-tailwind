import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const Contact = () => {
  return (
    <section id="contact" className="antialiased bg-gray-100 ">
      <div className="flex   justify-center items-center ">
        <div
          className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0  gap-y-6 bg-cyan-700   p-8
        sm:p-12 rounded-xl shadow-lg text-white "
        >
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>

              <p className="pt-2 text-cyan-100 text-base max-w-md">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                perferendis voluptate eos provident dicta ducimus quibusdam ea
                deserunt cum quis.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 ">
                {/* className="flex" */}
                <div className="">
                  <BsTelephoneFill className=" text-teal-300 text-xl" />
                  <span>+92 333 2839 452</span>
                </div>
                <div className="inline-flex space-x-2 ">
                  {/* className="flex" */}
                  <div>
                    <SiGmail className=" text-teal-300 text-xl" />
                    <span>saadshamsi13@gmail.com</span>
                  </div>
                  <div className="inline-flex space-x-2 ">
                    {/* className="flex" */}
                    <div>
                      <FaLocationArrow className=" text-teal-300 text-xl" />
                      <span>Karachi,Pakistan </span>
                    </div>

                    <div className=" mt-6 flex  gap-4 text-2xl font-bold cursor-pointer">
                      <FiInstagram />
                      <FaFacebookF />
                      <FaTwitter />
                      <BsLinkedin />
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-xl shadow-lg p-8 text-gray-600 md:w-80 flex  justify-right ">
                  <form action="" className="flex flex-col space-y-4 ">
                    <div>
                      <label htmlFor="" className="text-sm">
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
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                    <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                      Send Messages
                    </button>
                  </form>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
