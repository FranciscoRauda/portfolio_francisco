import React from "react";
import Image from "next/image";
import web1 from "/public/img/3.png";
import web2 from "/public/img/Deportes.png";
import doc from "/public/img/Doc.png";
import tienda from "/public/img/tienda.jpg";
import web4 from "/public/img/web4.png";  



const index = () => {
  return (
    <section className="bg-black h-[70rem] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          proyectos web
        </h1>
      </div>

      <div className="max-w-[80rem] mx-auto grid grid-cols-4 px-10 lg:grid-cols-4 items-center py-[10rem] gap-4  ">

      <div className="items-center w-full h-full text-center ">
          <Image
            className="object-cover h-full rounded-lg"
            src={web1}
           
            alt="Picture of the author"
          />
        </div>


        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={web2}
           
            alt="Picture of the author"
          />
        </div>

        <div className="w-full h-full">
          <Image
            className="object-cover h-full rounded-lg"    
            src={doc}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full ">
          <Image
            className="object-cover h-full rounded-lg"    
            src={tienda}
           
            alt="Picture of the author"
          />
        </div>
        <div className="w-full h-full ">
          <Image
            className="object-cover h-full rounded-lg"    
            src={web4}
           
            alt="Picture of the author"
          />
        </div>





      </div>
    </section>
  );
};

export default index;
