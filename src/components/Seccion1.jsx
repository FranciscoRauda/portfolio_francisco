import React from 'react'
import Image from 'next/image';
import image1 from "/public/img/image1.png";
import adobe from  "/public/img/adobe.png";
import imagen3 from "/public/img/imagen3.png";

export const Seccion1 = () => {
  return (
    <section className="text-white bg-black">
     <div className="max-w-[80rem] mx-auto grid grid-cols-1 px-10 lg:grid-cols-3 items-center py-[10rem]  ">
        
        <div>
          <Image
          src={image1}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
          
        </div>
       
       
        <div>
          
        <Image
          src={adobe}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
            
        </div>
        <div>
        <Image
          src={imagen3}
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded"
            />
        </div>
        </div>
    
    </section>
  )
}
export default Seccion1;