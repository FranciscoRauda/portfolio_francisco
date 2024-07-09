import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const index = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  return (
    <section className="bg-black h-[] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[4rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem]  ">
          Proyectos Publicitario
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-center tex-center ">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 ">
            <div>
              <button type="button" onClick={() => setOpen1(true)}>
                <Image
                  className="max-w-full h-50 "
                  src="/img/reloj.jpg"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>

              <Lightbox
                open={open1}
                close={() => setOpen1(false)}
                slides={[{ src: "/img/reloj.jpg" }]}
              />
            </div>
            
            <div>
              <button type="button" onClick={() => setOpen2(true)}>
                <Image
                  className="max-w-full h-50 "
                  src="/img/volvo.png"
                  width={400}
                  height={400}
                  alt="logo"
                ></Image>
              </button>

              <Lightbox
                open={open2}
                close={() => setOpen2(false)}
                slides={[{ src: "/img/volvo.png" }]}
              />
            </div>
           

            <div>
              <button type="button" onClick={() => setOpen3(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/coverfull.jpg"
                  width={400}
                  height={400}
                  alt="#"
                ></Image>
              </button>
              <Lightbox
                open={open3}
                close={() => setOpen3(false)}
                slides={[{ src: "/img/full1.jpg" }]}
              />
            </div>

            <div>
              <button type="button" onClick={() => setOpen4(true)}>
                <Image
                  className="max-w-full rounded-lg h-50 w-49"
                  src="/img/coverz.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open4}
                close={() => setOpen4(false)}
                slides={[{ src: "/img/zapato.png" }]}
              />
            </div>

            <div>
              <button type="button" onClick={() => setOpen5(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/cover-pollo.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
                <Lightbox
                  open={open5}
                  close={() => setOpen5(false)}
                  slides={[{ src: "/img/pollopublicidad.png" }]}
                />
              </button>
            </div>

            <div>
              <button type="button" onClick={() => setOpen6(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/AUDIFONOS-cover.jpg"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open6}
                  close={() => setOpen6(false)}
                  slides={[{ src:"/img/AUDIFONOS.jpg" }]}
                />
              </button>
            </div>
            
            <div>
              <button type="button" onClick={() => setOpen7(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/COPA.jpg"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open7}
                  close={() => setOpen7(false)}
                  slides={[{ src: "/img/COPA.jpg" }]}
                />
              </button>
            </div>
            
            <div>
              <button type="button" onClick={() => setOpen8(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/ilustracion.jpg"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open8}
                  close={() => setOpen8(false)}
                  slides={[{ src: "/img/ilustracion.jpg" }]}
                />
              </button>
            </div>

            <div>
              <button type="button" onClick={() => setOpen9(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/cover-T.png"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open9}
                  close={() => setOpen9(false)}
                  slides={[{ src: "/img/tarjetas.png" }]}
                />
              </button>
            </div>
            <div>
              <button type="button" onClick={() => setOpen10(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/cover-poster.png"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open10}
                  close={() => setOpen10(false)}
                  slides={[{ src: "/img/poster.png" }]}
                />
              </button>
            </div>
            <div>
              <button type="button" onClick={() => setOpen11(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/Pollo-cover1.png"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open11}
                  close={() => setOpen11(false)}
                  slides={[{ src: "/img/pollo-min.png" }]}
                />
              </button>
            </div>
            <div>
              <button type="button" onClick={() => setOpen12(true)}>
                <Image
                  className="max-w-full rounded-lg h-50"
                  src="/img/Cover-nier.png"
                  width={400}
                  height={400}
                  
                ></Image>
                <Lightbox
                  open={open12}
                  close={() => setOpen12(false)}
                  slides={[{ src: "/img/Nier-automata.png" }]}
                />
              </button>
            </div>

            
            
           <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
