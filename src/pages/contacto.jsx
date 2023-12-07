import React from "react";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Developers from "/public/img/Developers.jpg";
const contacto = () => {
  const correoDestino = "raudamejia08@outlook.com";

  return (
    <section className="bg-black h-auto lg:h-[55rem] items-center gap-2">
      <div className="justify-center font-bold text-center text-white">
        <h1 className="py-4 pt-5 text-4xl font-bold text-center text-white lg:pt-20 bg-white-200">
          Contáctame
        </h1>
        <p className="text-center text-white">
          Hola, puedes contactarte conmigo lo más pronto posible para <br />
          ayudarte en tus proyectos.
        </p>
      </div>
      <div className="container mx-auto mt-6">
        <div className="flex flex-col lg:flex-row">
          <div className="p-4 lg:flex-1 bg-black-200">
            <h2 className="text-lg font-semibold text-white"></h2>
            <div className="items-center w-full h-full text-center">
              <Image
                className="object-cover h-full rounded-lg"
                src={Developers}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="py-12 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold">Contacto</h2>

        <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-8">
      {/* Email */}
      <div className="flex items-center">
        <div className="p-3 bg-blue-500 rounded-full">
          <a href="mailto:raudamejia08@outlook.com">
          <FaMailBulk />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            
          </a>
        </div>
        <span className="ml-2 font-bold">raudamejia08@outlook.com</span>
      </div>

      {/* WhatsApp */}
      <div className="flex items-center">
        <div className="p-3 bg-green-500 rounded-full">
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            
          </a>
        </div>
        <span className="ml-2 font-bold">+50377950054</span>
      </div>

      {/* Location */}
      <div className="flex items-center">
        <div className="p-3 bg-red-500 rounded-full">
        <IoLocationSharp />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 22s-8-6.6-8-12a8 8 0 0 1 16 0c0 5.4-8 12-8 12zM12 10c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 0l2.5 5L12 16l-2.5-1.5L12 10z"
            />
        
        </div>
        <span className="ml-1 font-bold">El salvador</span>
      </div>
    </div>

        
      </div>
    </div>
          

          
        </div>
      </div>
    </section>
  );
};

export default contacto;
