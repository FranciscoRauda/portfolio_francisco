import React from "react";
import Image from "next/image";
import zapato from "/public/img/zapato.png";
import Mockup from "/public/img/Mockup.png";
import levitacion from "/public/img/levitacion.png";
import canada from "/public/img/canada.png";
import hamburgesa from "/public/img/hamburgesa.jpg";
import targetas from "/public/img/Targetas.jpg";

const Imagenes = () => {
  return (
    <section className="text-white bg-gradient-to-r from-indigo-800 to-gray-800">
  <div className="font-bold text-center md:pt-1">
    <h2 className="mb-4 text-4xl bold ">
      Imágenes
    </h2>
  </div>

  <div className="grid items-center justify-center max-w-screen-xl grid-cols-1 gap-4 py-16 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 animate-fade-up animate-twice animate-duration-[3000ms]">
    <div className="w-full h-full text-center">
      <Image
        className="object-cover w-full h-full rounded-lg"
        src={zapato}
        alt="Zapato"
      />
    </div>
    <div className="w-full h-full text-center">
      <Image
        className="object-cover w-full h-full rounded-lg"
        src={Mockup}
        alt="Mockup"
      />
    </div>
    <div className="w-full h-full text-center">
      <Image
        className="object-cover w-full h-full rounded-lg"
        src={levitacion}
        alt="Levitacion"
      />
    </div>
  </div>


  <div className="grid items-center justify-center max-w-screen-xl grid-cols-1 gap-4 py-7 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 animate-fade-up animate-twice animate-duration-[3000ms]">
    <div className="w-full h-full text-center">
      <Image
        className="object-cover w-full h-full rounded-lg"
        src={canada}
        alt="canada"
      />
    </div>
    <div className="w-full h-full text-center">
      <Image
        className="object-cover w-full h-full rounded-lg"
        src={hamburgesa}
        alt="hamburgesa"
      />
    </div>
    <div className="w-full h-full text-center">
      <Image
        className="object-cover w-full h-full rounded-lg"
        src={targetas}
        alt="targetas"
      />
    </div>
  </div>

  
</section>

  );
};

export default Imagenes;
