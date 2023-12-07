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
              src="https://img.freepik.com/free-vector/abstract-business-flyer-with-image_23-2148336256.jpg?w=826&t=st=1689200927~exp=1689201527~hmac=28337050f5a6b526a2c78f303be52e3ee7cd1431b0b1ee7e3f03c2429c0279f2"
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
              src="https://img.freepik.com/free-photo/black-shirt-with-word-ultra-it_1340-37775.jpg?t=st=1689197388~exp=1689200988~hmac=6cd7f83e26ab36349dc20b895501638fa2a3e53451c7a98d2b00de40d24e851a&w=826"
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
              src="https://img.freepik.com/free-photo/young-content-creator-girl-is-her-laptop-sitting-sofa-working-with-photos-from-home_1268-17400.jpg?w=1380&t=st=1689198642~exp=1689199242~hmac=436b76fd05c5550978f85dcadbb9933058f16426c3ff4fefecf258621d0f332f"
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
      </div>
    </div>
  );
};

export default index;
