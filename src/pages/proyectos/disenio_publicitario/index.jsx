import React from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const index = () => {
  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  
  return (
    <section className="container grid items-center grid-cols-1 p-4 mx-auto bg-black ">

      <div>  

      
     <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          Diseño Publicitario
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-1 lg:grid-cols-1">
        <div class="flex items-center justify-center tex-center ">
          
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2 ">
              <div>
                <button type="button" onClick={() => setOpen0(true)}>
                  <Image
                    class="h-50 max-w-full "
                    src="/img/reloj.jpg"
                    width={400}
                    height={400}
                    alt=""
                  ></Image>
                </button>

                <Lightbox
                  open={open0}
                  close={() => setOpen0(false)}
                  slides={[{ src: "/img/reloj.jpg" }]}
                />
              </div>
              <div>
                <button type="button" onClick={() => setOpen1(true)}>
                  <Image
                    className="object-cover h-full rounded-lg"
                    class="h-50 max-w-full object"
                    width={400}
                    height={400}
                    src="/img/volvo.png"
                  ></Image>
                </button>
                <Lightbox
                  open={open1}
                  close={() => setOpen1(false)}
                  slides={[{ src: "/img/volvo.png" }]}
                />
              </div>

              <div>
                <button type="button" onClick={() => setOpen2(true)}>
                  <Image
                    class="h-50 max-w-full rounded-lg"
                    src="/img/coverfull.jpg"
                    width={400}
                    height={400}
                    alt=""
                  ></Image>
                </button>
                <Lightbox
                  open={open2}
                  close={() => setOpen2(false)}
                  slides={[{ src: "/img/full1.jpg" }]}
                />
              </div>

              <div>
                <button type="button" onClick={() => setOpen3(true)}>
                  <Image
                    class="h-50 w-49 max-w-full rounded-lg"
                    src="/img/coverz.png"
                    width={400}
                    height={400}
                     alt=""
                  ></Image>
                </button>
                <Lightbox
                  open={open3}
                  close={() => setOpen3(false)}
                  slides={[{ src: "/img/zapato.png" }]}
                />
              </div>
              
              <div>
                <button type="button" onClick={() => setOpen4(true)} >
                <Image
                  class="h-50 max-w-full rounded-lg"
                  src="/img/cover-pollo.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
                <Lightbox
                  open={open4}
                  close={() => setOpen3(false)}
                  slides={[{ src: "/img/pollopublicidad.png" }]}
                />
                </button>
                </div>
                <div>
                    
                <button type="button" onClick={() => setOpen5(true)} >
                <Image
                  class="h-50 max-w-full rounded-lg"
                  src="/img/AUDIFONOS-cover.jpg"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
                <Lightbox
                  open={open5}
                  close={() => setOpen5(false)}
                  slides={[{ src: "/img/AUDIFONOS.jpg" }]}
                />
                </button>
                </div>

              
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default index;
