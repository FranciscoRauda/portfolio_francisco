import React from "react";
import Image from "next/image";
import web1 from "/public/img/ZAPATERIA.png";
import web2 from "/public/img/Deportes.png";
import doc from "/public/img/Doc.png";
import comproyse from "/public/img/comproyse.jpg";
import web4 from "/public/img/web4.png";
import reloj from "/public/img/reloj.jpg";
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
    <section className="items-center bg-black sm:flex-row md:flex-col lg:flex-row-reverse xl:flex-row">
     <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          Diseño Publicitario
        </h1>
      </div>

      <div className="flex items-center text-center w-23 h-23 sm:flex-row md:flex-col lg:flex-row-reverse xl:flex-row">
        <div class="flex items-center justify-center w-full h-full">
          <div className="container mt-10">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div>
                <button type="button" onClick={() => setOpen0(true)}>
                  <img
                    class="h-50 max-w-full "
                    src="/img/reloj.jpg"
                    alt=""
                  ></img>
                </button>

                <Lightbox
                  open={open0}
                  close={() => setOpen0(false)}
                  slides={[{ src: "/img/reloj.jpg" }]}
                />
              </div>
              <div>
                <button type="button" onClick={() => setOpen1(true)}>
                  <img
                    className="object-cover h-full rounded-lg"
                    class="h-40 max-w-full object"
                    src="/img/SOCIALMEDIA.png"
                  ></img>
                </button>
                <Lightbox
                  open={open1}
                  close={() => setOpen1(false)}
                  slides={[{ src: "/img/SOCIALMEDIA.png" }]}
                />
              </div>

              <div>
                <button type="button" onClick={() => setOpen2(true)}>
                  <img
                    class="h-50 max-w-full rounded-lg"
                    src="/img/coverfull.jpg"
                    alt=""
                  ></img>
                </button>
                <Lightbox
                  open={open2}
                  close={() => setOpen2(false)}
                  slides={[{ src: "/img/full1.jpg" }]}
                />
              </div>

              <div>
                <button type="button" onClick={() => setOpen3(true)}>
                  <img
                    class="h-50 w-49 max-w-full rounded-lg"
                    src="/img/coverz.png"
                    alt=""
                  ></img>
                </button>
                <Lightbox
                  open={open3}
                  close={() => setOpen3(false)}
                  slides={[{ src: "/img/zapato.png" }]}
                />
              </div>
              
              <div>
                <button type="button" onClick={() => setOpen4(true)} >
                <img
                  class="h-50 max-w-full rounded-lg"
                  src="/img/cover-pollo.png"
                  alt=""
                ></img>
                <Lightbox
                  open={open4}
                  close={() => setOpen3(false)}
                  slides={[{ src: "/img/pollopublicidad.png" }]}
                />
                </button>
                </div>
                <div>
                    
                <button type="button" onClick={() => setOpen5(true)} >
                <img
                  class="h-50 max-w-full rounded-lg"
                  src="/img/AUDIFONOS-cover.jpg"
                  alt=""
                ></img>
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
