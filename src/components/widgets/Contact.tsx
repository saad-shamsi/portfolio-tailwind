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
import Button from "../shared/Button";
const Contact = () => {
  return (
    <section
      id="contact"
      className="wrapper min-w-fit mx-auto md:pl-28 px-5  antialiased bg-gradient-to-b from-gray-800 to-black h-full "
    >
      <div className="flex  flex-1 justify-between gap-6 py-6 md:flex-row flex-col md:text-left text-center  ">
        <div className="space-y-4 ">
          <h1 className="font-bold text-4xl tracking-wide text-white">
            Contact Us
          </h1>
          <p className="pt-2 text-cyan-100  md:max-w-md max-w-none text-lg  font-2xl ">
            {" "}
            Need help with UI/UX of your website? You are at the right plce,
            feel free to call or whatsapp your query via email or whatsapp
            directly!. We are here to help!
          </p>

          <div className="p-4 flex flex-col gap-4 rounded-xl shadow-xl text-white">
            <a href="https://wa.me/92333283945" target="_blank">
              <div className="flex justify-center items-center p-4 bg-[#0e224b] flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <IoLogoWhatsapp className=" text-green-600 text-3xl " />
                </div>
                <div className=" text-2xl font-semibold pt-3">Whatsapp</div>
                <div>+92 333 2839 452</div>
                <div className="font-light ">Send a Message</div>
              </div>
            </a>
            <a href="mailto:saadshamsi13@gnail.com">
              <div className="flex justify-center items-center p-4 bg-[#0e224b]  flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer">
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
              <div className="flex justify-center items-center p-4 bg-[#0e224b] flex-col  rounded-lg hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <FaLocationArrow className="  text-2xl " />
                </div>
                <div className=" text-2xl font-semibold pt-3">Location</div>
                <div>Karachi,Pakistan</div>
                <div className="font-light">Let us meet!</div>
              </div>
            </a>
            {/* icons section */}
            <div className=" mt-3 flex  gap-4 text-2xl font-bold cursor-pointer  justify-center text-white">
              <a href="https://www.instagram.com/" target="blank">
                <FiInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085458046949"
                target="blank"
              >
                {" "}
                <FaFacebookF />
              </a>

              <a href="https://twitter.com/SaadShamsi09" target="blank">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/saad-shamsi-4b92a6232/"
                target="blank"
              >
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>

          {/* parent div end */}
        </div>

        {/* contact-section */}

        <div
          className="bg-[#001d3d] 
         rounded-xl xl:rounded-3xl shadow-2xl p-8 xl:p-16 text-white  flex lg:mr-28 mr-0   md:mt-40 xl:mt-28 mt-20 h-full self-center"
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
                placeholder="Email"
                className="ring-1 ring-gray-300 w-full rounded-md px-4  py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="ring-1 ring-gray-300 w-full rounded-md max-h-32 px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="my-4 flex justify-around">
              <Button text="Send Message" />
            </div>
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
