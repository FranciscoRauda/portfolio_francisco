import React from "react";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Developers from "/public/img/Developers.jpg";
const contacto = () => {
  const correoDestino = "raudamejia08@outlook.com";

  return (
    <section className="bg-gradient-to-r from-indigo-800 to-gray-800 h-auto lg:h-[55rem] items-center gap-2">
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
          <div className="flex flex-col items-center justify-center flex-1 py-12 text-white bg-gray-800">
            <h2 className="mb-10 text-4xl font-semibold">Contacto</h2>
            <div className="flex flex-col items-start space-y-8">
              {/* Email */}
              <div className="flex items-center">
                <div className="p-4 bg-blue-500 rounded-full">
                  <a href="mailto:raudamejia08@outlook.com">
                    <FaMailBulk className="text-3xl" />
                  </a>
                </div>
                <span className="ml-4 text-xl font-bold">raudamejia08@outlook.com</span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center">
                <div className="p-4 bg-green-500 rounded-full">
                  <a
                    href="https://wa.me/50377960054"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp className="text-3xl" />
                  </a>
                </div>
                <span className="ml-4 text-xl font-bold">+503 7796 0054</span>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="p-4 bg-red-500 rounded-full">
                  <IoLocationSharp className="text-3xl" />
                </div>
                <span className="ml-4 text-xl font-bold">El Salvador</span>
              </div>
            </div>
          </div>
          

          
        </div>
      </div>
    </section>
  );
};

export default contacto;
