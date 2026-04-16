import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

import Sobremi from "@/components/Sobremi";
import Proyectos from "@/components/Proyectos";
import Imagenes from "@/components/Imagenes";
import Footer from "@/components/Footer";
import Servicios from "@/components/Servicios"; // Import the new component
import NewSectionPlaceholder from "@/components/NewSectionPlaceholder"; // Import the new placeholder component


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
       <Header/>
       {/* <Seccion1/> */}
       <Sobremi/>
       <Proyectos/>
       <NewSectionPlaceholder/> {/* Insert the new placeholder component here */}
       <Servicios/>
        <Imagenes/>
      
        
    </main>
  );
}
