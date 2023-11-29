import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import{FaWordpress} from "react-icons/fa";
import{SiAdobephotoshop} from "react-icons/si";
import{SiAdobeillustrator} from "react-icons/si";
import{SiFigma} from "react-icons/si";

export const Sobremi = () => {
  return (
    <section className="px-4 text-center text-white bg-black animate-fade">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 px-20 lg:grid-cols-2 items-center py-[10rem] space-y-4 gap-10">
        <div>
          <h1 className="text-4xl font-bold text-center bg-white-200 p animate-fade-right">
          Hola,conozcámonos
          </h1>
          <p className="mt-10 text-justify animate-fade-right">
          Hola, Mi nombre es Daniel Mejía y soy diseñador gráfico web,
            bienvenido, será de mi agrado compartir contigo algunos de los
            proyectos que he realizado a lo largo de mi formación académica y
            laboral, en el cual pongo en práctica mis conocimientos y
            creatividad para realizar proyectos altamente creativos y
            Funcionales. <br></br>
            Los programas en los cuales realizo mis proyectos son adobe
            Photoshop, ilustrador, para el área web, utilizo Figma, entre otros
            conocimientos en el área web son HTML, CSS, materialize, Bootstrap,
            WordPress, JS, los cuales son conocimientos técnicos que me ayudan
            a realizar todos mis proyectos.
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Habilidades</h1>
          <div className="grid grid-cols-2 gap-10 mt-10 md:grid-cols-3 lg:grid-cols-4 animate-fade-left ">
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <IoLogoHtml5 className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></IoLogoHtml5>
              <h2 className="font-bold">HTML</h2>
            </div>
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <IoLogoCss3 className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></IoLogoCss3>
              <h2 className="font-bold">CSS</h2>
            </div>
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <FaPhp className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></FaPhp>
              <h2 className="font-bold">PHP</h2>
            </div>
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <IoLogoJavascript className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></IoLogoJavascript>
              <h2 className="font-bold">Javascript</h2>
            </div>
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <FaWordpress className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></FaWordpress>
              <h2 className="font-bold">WordPress</h2>
            </div>
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <SiAdobephotoshop className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></SiAdobephotoshop>
              <h2 className="font-bold">Photoshop</h2>
            </div>

            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <SiAdobeillustrator className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></SiAdobeillustrator>
              <h2 className="font-bold">Ilustrador</h2>
            </div>
            <div className="flex flex-col items-center justify-center transition cursor-pointer hover:translate-y-2">
              <SiFigma className="content-center text-[4rem] text-black bg-white p-1 rounded-sm"></SiFigma>
              <h2 className="font-bold">Figma</h2>
            </div>

          </div>
          
            
            
          
        </div>
      </div>
    </section>
  );
};
export default Sobremi;
