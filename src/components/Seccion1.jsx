import React from 'react'
import Image from 'next/image';
import image1 from "/public/img/image1.png";
import adobe from  "/public/img/adobe.png";
import laptop from "/public/img/laptop.jpg";
import imagen3 from "/public/img/imagen3.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Seccion1 = () => {
  const [open, setOpen] = React.useState(false);
  return (
     <section className="items-center text-center text-white bg-black animate-fade-up animate-once animate-duration-[600ms] animate-delay-[90ms]">
     <div className="items-center text-center ">
        
     <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox <Image
          src={laptop}
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
          { src: "./img/laptop.jpg" },
          { src: "./img/ramdom.png" },
          { src: "./img/TRAILER.png" },
        ]}
      />
    </>
       
        <div>
          
        
            
        </div>
        <div>
        
        </div>
        </div>
    
    </section>
  )
}
export default Seccion1;