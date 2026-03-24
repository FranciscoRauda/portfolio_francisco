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
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  return (
    <section className="items-center h-full pb-20 bg-gradient-to-r from-black to-blue-900">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[4rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem]  ">
          Proyectos
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-center tex-center ">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 ">
          <div>
              <button type="button" onClick={() => setOpen15(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/innovacion-cover.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>

              <Lightbox
                open={open15}
                close={() => setOpen15(false)}
                slides={[{ src: "/img/sitio2026.png" }]}
              />
            </div>
            <div>
              <button type="button" onClick={() => setOpen4(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/comproyse-cover.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open4}
                close={() => setOpen4(false)}
                slides={[
                  { src: "/img/comproyse.jpg" },
                  { src: "/img/comproyse2.jpg" },
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="http://comproyse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </p>
              
            </div>

            <div>
              <button type="button" onClick={() => setOpen5(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/sivar-cover.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
                <Lightbox
                  open={open5}
                  close={() => setOpen5(false)}
                  slides={[
                    { src: "/img/INICIO.png" }, 
                    { src: "/img/INVENTARIO.png" },
                    { src: "/img/TIENDA.png" },
                    { src: "/img/ventas.png"},
                  ]}
                />
            </div>

            <div>
              <button type="button" onClick={() => setOpen6(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/ferreteria-cover.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open6}
                close={() => setOpen6(false)}
                slides={[
                  { src: "/img/ferreteria.png" },
                 
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="https://ferreteriafenix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </p>
              
            </div>


            <div>
              <button type="button" onClick={() => setOpen7(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/cover-landin.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open7}
                close={() => setOpen7(false)}
                slides={[
                  { src: "/img/principal-landing.png" },
                  { src: "/img/seccion-landing.png" },
                 
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="https://serali.com.mx/landing-promo-facebook-ads/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </p>
              
            </div>

            <div>
              <button type="button" onClick={() => setOpen8(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/cover-serali.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open8}
                close={() => setOpen8(false)}
                slides={[
                  { src: "/img/serali1.png" },
                  { src: "/img/serali2.png" },
                 
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="https://serali.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </p>
              
            </div>


            <div>
              <button type="button" onClick={() => setOpen9(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/cover-travel.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open9}
                close={() => setOpen9(false)}
                slides={[
                  { src: "/img/sitiotravel.png" },
                  { src: "/img/sitiotravel.png" },
                 
                ]}
              />
              
              
            </div>


            <div>
              <button type="button" onClick={() => setOpen10(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/panel.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open10}
                close={() => setOpen10(false)}
                slides={[
                  { src: "/img/panel.png" },
                 ]}
              />
             </div>
            

             <div>
              <button type="button" onClick={() => setOpen11(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/sitioapp-cover.png"
                  width={400}
                  height={400}
                  alt=""
                ></Image>
              </button>
              <Lightbox
                open={open11}
                close={() => setOpen11(false)}
                slides={[
                  { src: "/img/sitio-app.png" },
                  { src: "/img/bienes.png" },
                 
                 
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="https://serali.com.mx/emprende-con-tu-propia-app-tipo-uber/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </p>
              
            </div>



            

            {/* New Card */}
            <div>
              <button type="button" onClick={() => setOpen13(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/cover-sitiocoffe.png"
                  width={400}
                  height={400}
                  alt="Placeholder Image"
                ></Image>
              </button>
              <Lightbox
                open={open13}
                close={() => setOpen13(false)}
                slides={[
                  { src: "/img/sitiowebcoffe.jpg" },
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="https://franciscorauda.github.io/sitio-web-con-IA/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio (Nuevo)
                </a>
              </p>
            </div>


            {/* Duplicated Card */}
            <div>
              <button type="button" onClick={() => setOpen14(true)}>
                <Image
                  className="object-cover rounded-lg"
                  src="/img/cover-moviliaria.png"
                  width={400}
                  height={400}
                  alt="Placeholder Image (Duplicated)"
                ></Image>
              </button>
              <Lightbox
                open={open14}
                close={() => setOpen14(false)}
                slides={[
                  { src: "/img/bienes.png" },
                  { src: "/img/wireframe.png" }
                ]}
              />
              <p className="text-center text-white">
                <a
                  href="https://bienesraiceselsalvadorbelen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio 
                </a>
              </p>
            </div>


            

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
