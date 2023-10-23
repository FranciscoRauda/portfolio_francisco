import React from "react";
import Image from "next/image";
import Perfil from "/public/img/foto-profesional.jpg";

const Header = () => {
  return (
    <section className="text-white bg-black ">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 px-10 lg:grid-cols-2 items-center py-[5rem]">
        <div>
          <Image
            src={Perfil}
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="mt-5 text-5xl font-bold text-center lg:mt-0 lg:text-left">Hola mi nombre es Francisco Daniel soy diseñador web. 💻</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
