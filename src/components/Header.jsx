import React from "react";
import Image from "next/image";
import Perfil from "/public/img/foto-profesional.jpg"; 

const Header = () => {
  return (
    <section className="flex items-center justify-center py-32 text-white bg-gradient-to-r from-indigo-800 to-gray-800">
      <div className="grid max-w-screen-xl grid-cols-1 py-10 mx-auto md:grid-cols-2 px-4 md:px-6 
                      gap-8 md:gap-16 lg:gap-24 
                      animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[8ms] animate-ease-in-out animate-normal animate-fill-forwards">
        
        {/* Columna de la Imagen */}
        <div className="flex items-center justify-center md:justify-center">
          <Image
            src={Perfil}
            width={400}
            height={400}
            alt="Picture of the author"
            className="object-cover w-64 h-64 border-4 border-gray-600 rounded-full shadow-lg md:w-80 md:h-80" 
          />
        </div>
        
        {/* Columna del Texto Animado */}
        <div className="flex items-center justify-center mt-8 md:justify-center md:mt-0"> 
  <h1 class="text-center md:text-center">
    <span class="block text-2xl font-normal text-white md:text-4xl">Hola, mi nombre es</span>
    <span class="block text-4xl font-bold text-white md:text-6xl relative overflow-hidden whitespace-nowrap border-r-2 border-white w-[18ch] animate-typewriter-name">
      Francisco Daniel,
    </span>
    <span class="block text-4xl font-bold text-white md:text-6xl relative overflow-hidden whitespace-nowrap border-r-2 border-white w-[21ch] animate-typewriter-role">
      Soy diseñador web.💻
    </span>
  </h1>
</div>

      </div>
    </section>
  );
};

export default Header;