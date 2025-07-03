import React from "react";
import Image from "next/image";
import Perfil from "/public/img/foto-profesional.jpg"; 

const Header = () => {
  return (
    <section className="flex items-center justify-center min-h-screen p-4 text-white bg-black">
      <div className="grid max-w-screen-xl grid-cols-1 py-10 mx-auto md:grid-cols-2 lg:px-20 
                      gap-8 md:gap-16 lg:gap-24 
                      animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[8ms] animate-ease-in-out animate-normal animate-fill-forwards">
        
        {/* Columna de la Imagen */}
        <div className="flex items-center justify-center md:justify-end">
          <Image
            src={Perfil}
            width={400}
            height={400}
            alt="Picture of the author"
            className="object-cover w-64 h-64 border-4 border-gray-600 rounded-full shadow-lg md:w-80 md:h-80" 
          />
        </div>
        
        {/* Columna del Texto Animado */}
        <div className="flex items-center justify-center mt-8 md:justify-start md:mt-0"> 
  <h1 className="text-xl font-bold text-center text-gray-100 md:text-5xl md:text-left">

    {/* ESCRITORIO */}
    <div className="hidden md:block"> 
      <span className="relative block overflow-hidden border-r-2 border-white w-[27ch] mx-auto md:mx-0 animate-[typewriter_1.8s_steps(27)_forwards,blink_0.7s_step-end_infinite]">
        Hola,mi nombre es Francisco Daniel,
      </span>

      <span className="relative block overflow-hidden border-r-2 border-white w-[19ch] mx-auto md:mx-0 animate-[typewriter_2s_steps(20)_1.9s_forwards,blink_0.7s_step-end_infinite]">
       Soy diseñador web.💻
      </span>
    </div>

    {/* MÓVIL */}
    <div className="block md:hidden"> 
      <span className="relative block overflow-hidden border-r-2 border-white w-[34ch] mx-auto animate-[typewriter_3s_steps(34)_forwards,blink_0.7s_step-end_infinite]">
        Hola, mi nombre es Francisco Daniel
      </span>

      <span className="relative block overflow-hidden border-r-2 border-white w-[22ch] mx-auto animate-[typewriter_2s_steps(22)_3.1s_forwards,blink_0.7s_step-end_infinite]">
       , Soy Diseñador web. 💻
      </span>
    </div>

  </h1>
</div>

      </div>
    </section>
  );
};

export default Header;