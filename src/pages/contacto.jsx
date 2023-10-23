import React from "react";
import Image from "next/image";
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMailUnread} from 'react-icons/io';
import {  FaMapMarkedAlt} from 'react-icons/fa';
import Developers from "/public/img/Developers.jpg";
const contacto = () => {
  const correoDestino = 'raudamejia08@outlook.com';
  return (
    <section className="bg-black h-[55rem] items-center gap-2">
      <div className="justify-center font-bold text-center text-white">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          Contáctame
        </h1>
        <p className="text-center">Hola Puedes contactarte conmigo lo más pronto, para <br />
        ayudarte en tus proyectos </p>
      </div>
      <div>
        <div className="container justify-center gap-6 mx-auto">
          <div className="flex">
            <div className="flex-1 p-4 bg-black-200">
              <h2 className="text-lg font-semibold">Sección 1</h2>

              <div className="items-center w-full h-full text-center ">
                <Image
                  className="object-cover h-full rounded-lg"
                  src={Developers}
                  alt="Picture of the author"
                />
              </div>
            </div>

            <div className="flex-1 ml-10 bg-black-300 ">
              <h2 className="text-lg font-semibold">Sección 2</h2>
              <div className="flex items-center space-x-2">
                
                <div className="p-2 bg-green-400 rounded-full">
                < a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">  <FaWhatsapp className="w-6 h-6 text-white lg-{4rem}" />    </a>
              </div>
              <span className="font-bold text-white">7796-0054</span>
                <div className="p-2 bg-blue-400 rounded-full">
                <a href={`mailto:${correoDestino}`}>  <IoIosMailUnread className="w-6 h-6 text-white" /></a>
                  
                </div>
                <span className="font-bold text-white">raudamejia08@outlook.com</span>
                <div className="p-2 bg-red-400 rounded-full">
                  <FaMapMarkedAlt className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-white"  >El salvador,San salvador.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contacto;
