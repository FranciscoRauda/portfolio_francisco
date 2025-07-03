import React from "react";
import Image from "next/image";
import Perfil from "/public/img/foto-profesional.jpg";

const Header = () => {
  return (
    <section className="text-white bg-black ">
    <div className="grid max-w-screen-xl grid-cols-1 py-10 mx-auto md:grid-cols-2 lg:px-20 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[8ms] animate-ease-in-out animate-normal animate-fill-forwards">
      <div className="flex items-center justify-center md:justify-start ">
        <Image
          src={Perfil}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full max-w-xs rounded-full md:w-full md:max-w-none"
        />
      </div>
      <div className="mt-2 md:mt-9 ml-9">
        <h1 className="text-2xl font-bold text-center md:text-5xl md:text-left">
          Hola, mi nombre es Francisco Daniel, soy diseñador web. 💻
        </h1>
      </div>
    </div>
  </section>
  );
};

export default Header;
