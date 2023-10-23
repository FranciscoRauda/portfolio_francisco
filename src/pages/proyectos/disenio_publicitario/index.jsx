import React from "react";
import Image from "next/image";
import zapato from "/public/img/zapato.png";
import full1 from "/public/img/full1.jpg";
import reloj from "/public/img/reloj.jpg";
import social from "/public/img/SOCIALMEDIA.png";  



const index = () => {
  return (
    <section className="bg-black h-[70rem] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          proyectos publicitario
        </h1>
      </div>

      <div className="max-w-[80rem] mx-auto grid grid-cols-4 px-10 lg:grid-cols-4 items-center py-[10rem] gap-4  ">

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
            src={full1}
           
            alt="Picture of the author"
          />
        </div>

        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={reloj}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full ">
          <Image
            className="object-cover h-full rounded-lg"    
            src={social}
           
            alt="Picture of the author"
          />
        </div>





      </div>
    </section>
  );
};

export default index;
