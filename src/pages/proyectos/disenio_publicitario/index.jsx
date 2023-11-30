import React from "react";
import Image from "next/image";
import zapato from "/public/img/zapato.png";
import full1 from "/public/img/full1.jpg";
import reloj from "/public/img/reloj.jpg";
import social from "/public/img/SOCIALMEDIA.png";  
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



const index = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  return (
    <section className="bg-black h-[70rem] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          proyectos publicitario
        </h1>
      </div>

      <div className="max-w-[80rem] mx-auto grid grid-cols-4 px-10 lg:grid-cols-4 items-center py-[10rem] gap-4  ">

      <div className="items-center w-full h-full text-center ">
          
      <>
      <button type="button" onClick={() => setOpen(true)}>
      <Image
          src={zapato}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/img/zapato.png" },
          
        ]}
      />
    </>


    
          
     </div>

     
     <>
      <button type="button" onClick={() => setOpen1(true)}>
      <Image
          src={full1}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
      </button>

      <Lightbox
        open={open1}
        close={() => setOpen(false)}
        slides={[
          { src: "/img/full1.jpg",  },
          
        ]}
      />
    </>
    
    <>
      <button type="button" onClick={() => setOpen2(true)}>
      <Image
          src={social}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
      </button>

      <Lightbox
        open={open2}
        close={() => setOpen2(false)}
        slides={[
          { src: "/img/SOCIALMEDIA.png"  },
          
        ]}
      />
    </>
    
    <>
      <button type="button" onClick={() => setOpen3(true)}>
      <Image
          src={reloj}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
      </button>

      <Lightbox
        open={open3}
        close={() => setOpen3(false)}
        slides={[
          { src: "/img/reloj.jpg" },
          
        ]}
      />
    </>

        



        

       




      </div>
    </section>
  );
};

export default index;
