import React from "react";
import Image from "next/image";
import Publicidad from "/public/img/publicidad.png";
import Diseñoweb from "/public/img/diseñoweb.png";
import Mock from "/public/img/camisa.png";
import Fotografia from "/public/img/Fotografia.png";
import Link from "next/link";

const index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen animate-fade-left animate-twice animate-duration-[600ms] animate-delay-100">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://img.freepik.com/foto-gratis/fotografo-artista-afroamericano-auriculares-que-retocan-imagenes-disenadores-utilizando-software-posproduccion-digital-joven-editor-ilustrador-editando-fotografia-creativa-trabajando-lejos-casa_482257-28563.jpg?t=st=1725908157~exp=1725911757~hmac=e0e8d0ac6200d51dae9c93826e6ad1083ad734bc89338bdd41dced8af734c64f&w=740 "
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <Link
                className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent md:text-red-700 md:dark:text-red-500 dark:bg-red-600"
                href="/proyectos/diseniopublicitario"
              >  
          <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white font-dmserif">Diseño Publicitario </h1>
            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Aqui encontraràs proyectos de diseño publicidad y redes sociales.
            </p>
            
          </div>
          </Link>
          
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
         
          <Link
                className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent md:text-red-700 md:dark:text-red-500 dark:bg-red-600"
                href="/proyectos/disenio_web">
              
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white font-dmserif">
              Diseño y Desarollo web
            </h1>
            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
             Aquì encontraràs proyectos de Diseño web, unos personales, y otros proyectos reales.
            </p>
            </div>
          </Link>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://img.freepik.com/foto-gratis/producto-regeneracion-cutanea-vida-muerta_23-2151232259.jpg?t=st=1725908654~exp=1725912254~hmac=cc9814794b5a57734c41504a277ca82a5a3227f2536815d507b99a50098f6524&w=740"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          
          <Link
                className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent md:text-red-700 md:dark:text-red-500 dark:bg-red-600"
                href="/proyectos/mockup"
              >  
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white font-dmserif">
            Mockups
            </h1>
            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Aqui encontrarás Proyectos de producto y diseño final.
            </p>
           
           </div>
           </Link>
        </div>
        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://img.freepik.com/foto-gratis/camara-fotos-explotacion-mano_23-2150630970.jpg?t=st=1725909018~exp=1725912618~hmac=458f0e3a1932e9fc8119b1a581dc5dbfd8877d63f0e6e5a2ffe76db414298e7b&w=740"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <Link
                className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent md:text-red-700 md:dark:text-red-500 dark:bg-red-600"
                href="/proyectos/fotografia"
              >
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white font-dmserif">
            Fotografía
            </h1>
            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Aquì encontràs proyectos de ediciòn de fotografias.
            </p>
            
          </div>
         </Link>
          
        </div>



        <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://img.freepik.com/foto-gratis/freelance-masculino-que-trabaja-produccion-peliculas-software-computadora-editando-montajes-peliculas-efectos-visuales-audio-creacion-contenido-multimedia-material-archivo-aplicacion-creativa-clasificacion-color_482257-50390.jpg?t=st=1725900878~exp=1725904478~hmac=bf570e83b4f580f59a1416f47cdd071dcbb11b610d63eb6441f3f4799daf6330&w=1380"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <Link
                className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent md:text-red-700 md:dark:text-red-500 dark:bg-red-600"
                href="/proyectos/video"
              >
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white font-dmserif">
            Videos
            </h1>
            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Aquì encontràs proyectos de ediciòn de videos.
            </p>
            
          </div>
         </Link>
          
        </div>







      </div>
    </div>
  );
};

export default index;
