import React from "react";
import Image from "next/image";
import zapato from "/public/img/zapato.png";
import Mockup from "/public/img/Mockup.png";
import levitacion from "/public/img/levitacion.png";

const Imagenes = () => {
  return (
    <section className="items-center text-white bg-black ">
      <div>
        <h2 className="text-center pt-[5rem] pt font-bold tmtext-3xl bg-white-200 ytext-center text-[4rem]">
        Imágenes
        </h2>
      </div>

      <div className="max-w-[80rem] mx-auto  grid grid-cols-4 px-30 lg:grid-cols-3  py-[10rem] gap-4 items-center text-center ">
        <div className="items-center w-full h-full text-center ">
          <Image
            className="object-cover h-full rounded-lg"
            src={zapato}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={Mockup}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={levitacion}
           
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default Imagenes;
