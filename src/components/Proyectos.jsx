import React from "react";
import Image from "next/image";
import reloj from "/public/img/reloj.jpg";
import full1 from "/public/img/full1.jpg";
import doc from "/public/img/Doc.png";
import tienda from "/public/img/tienda.jpg";  



const proyectos = () => {
  return (
    <section className="flex-col items-center min-h-screen bg-gradient-to-r from-indigo-800 to-gray-800 ">
    <div className="font-bold text-center text-white ">
      <h1 className="pt-2 mb-4 text-4xl text-center md:text-5xl lg:text-6xl md:pt-16 bg-white-200 md:text-center">
        Proyectos
      </h1>
    </div>
  
    <div className="grid items-center max-w-screen-xl grid-cols-1 gap-4 px-4 py-10 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:py-16 animate-fade-up animate-twice animate-duration-[3000ms]">
      <div className="w-full h-full">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={reloj}
          alt="Reloj"
        />
      </div>
  
      <div className="w-full h-full">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={full1}
          alt="Full1"
        />
      </div>
  
      <div className="w-full h-full">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={doc}
          alt="Doc"
        />
      </div>
  
      <div className="w-full h-full">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={tienda}
          alt="Tienda"
        />
      </div>
    </div>
  </section>
  
  );
};

export default proyectos;
