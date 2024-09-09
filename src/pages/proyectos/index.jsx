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
              src="https://i.pinimg.com/564x/12/af/f0/12aff04fcc677e0ea8b412fc1b32b37d.jpg "
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
              src="https://i.pinimg.com/564x/b5/a4/0e/b5a40ef7a2e31eccb0474d0f76227d89.jpg"
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
              src="https://i.pinimg.com/564x/a4/79/13/a47913486c16552f9a7c9ce5e2dc1e8b.jpg"
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
              src="https://i.pinimg.com/564x/d6/78/03/d67803de725da1c479c722c8e5d41538.jpg"
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
