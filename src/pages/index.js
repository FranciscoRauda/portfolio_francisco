import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Seccion1 from  "@/components/Seccion1";
import Sobremi from "@/components/Sobremi";
import Proyectos from "@/components/Proyectos";
import Imagenes from "@/components/Imagenes";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
       <Header/>
       <Seccion1/>
       <Sobremi/>
       <Proyectos/>
        <Imagenes/>
      
        
    </main>
  );
}
