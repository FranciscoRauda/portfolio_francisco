import React from "react";
import Image from "next/image";
import mock3 from "/public/img/mock-2.jpg";
import gorra from "/public/img/CAPSSMILE.jpg";
import mockp from "/public/img/Mockup-p.jpg";
import camisas from "/public/img/camisas-m.jpg";  



const index = () => {
  return (
    <section className="bg-black h-[70rem] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          Mock-up
        </h1>
      </div>

      <div className="max-w-[80rem] mx-auto grid grid-cols-4 px-10 lg:grid-cols-4 items-center py-[10rem] gap-4  ">

      <div className="items-center w-full h-full text-center ">
          <Image
            className="object-cover h-full rounded-lg"
            src={mock3}
           
            alt="Picture of the author"
          />
        </div>


        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={gorra}
           
            alt="Picture of the author"
          />
        </div>

        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={mockp}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full ">
          <Image
            className="object-cover h-full rounded-lg"    
            src={camisas}
           
            alt="Picture of the author"

          />
        </div>





      </div>
    </section>
  );
};

export default index;
