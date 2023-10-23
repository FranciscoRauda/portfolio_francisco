import React from "react";
import Image from "next/image";
import mon1 from "/public/img/MONTAJE1.png";
import mon2 from "/public/img/MONTAJE2.png";
import mon3 from "/public/img/MONTAJE3.jpg";
import Auto from "/public/img/Auto.png";  



const index = () => {
  return (
    <section className="bg-black h-[70rem] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          Fotografía
        </h1>
      </div>

      <div className="max-w-[80rem] mx-auto grid grid-cols-4 px-10 lg:grid-cols-4 items-center py-[10rem] gap-4  ">

      <div className="items-center w-full h-full text-center ">
          <Image
            className="object-cover h-full rounded-lg"
            src={mon1}
           
            alt="Picture of the author"
          />
        </div>


        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={mon2}
           
            alt="Picture of the author"
          />
        </div>

        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={mon3}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={Auto}
           
            alt="Picture of the author"
          />
        </div>
        




      </div>
    </section>
  );
};

export default index;
