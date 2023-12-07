import React from "react";
import Image from "next/image";
import zapato from "/public/img/zapato.png";
import Mockup from "/public/img/Mockup.png";
import levitacion from "/public/img/levitacion.png";

const Imagenes = () => {
  return (
    <section className="text-white bg-black animate-fade-left animate-once animate-duration-600 animate-delay-90">
  <div className="font-bold text-center md:pt-1">
    <h2 className="mb-4 text-4xl bold ">
      Imágenes
    </h2>
  </div>

  <div className="grid items-center justify-center max-w-screen-xl grid-cols-1 gap-4 py-16 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
</section>

  );
};

export default Imagenes;
