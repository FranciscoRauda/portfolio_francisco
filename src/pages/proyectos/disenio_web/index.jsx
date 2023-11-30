import React from "react";
import Image from "next/image";
import web1 from "/public/img/ZAPATERIA.png";
import web2 from "/public/img/Deportes.png";
import doc from "/public/img/Doc.png";
import comproyse from "/public/img/comproyse.jpg";
import web4 from "/public/img/web4.png";
import Inicio from "/public/img/INICIO.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const index = () => {
  const [open, setOpen] = React.useState(false);
  const [open0, setOpen0] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  return (
    <section className="bg-black h-[70rem] items-center">
      <div className="font-bold text-center text-white ">
        <h1 className="text-center pt-[5rem] ptfont-bold tmtext-4xl bg-white-200 ytext-center text-[4rem] ">
          proyectos web
        </h1>
      </div>

      <div className="max-w-[80rem] mx-auto grid grid-cols-4 px-10 lg:grid-cols-4 items-center py-[10rem] gap-4  ">
       
          <button type="button" onClick={() => setOpen0(true)}>
            <Image
              src={web1}
              width={350}
              height={350}
              alt="Picture of the author"
              className="rounded "
            />
          </button>

          <Lightbox
            open={open0}
            close={() => setOpen0(false)}
            slides={[{ src: "/img/ZAPATERIA.png" }]}
          />


         <>
          <button type="button" onClick={() => setOpen(true)}>
            <Image
              src={web2}
              width={350}
              height={350}
              alt="Picture of the author"
              className="rounded"
            />
          </button>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: "/img/deporte.png" }, { src: "/img/deporte2.jpg" }]}
          />


          
        


        

        

       
        </>
        {/* Bloque 2 */}
        <button type="button" onClick={() => setOpen2(true)}>
          <Image
            src={doc}
            width={350}
            height={350}
            alt="Otra descripción de la imagen"
            className="rounded"
          />
        </button>

        <Lightbox
          open={open2}
          close={() => setOpen2(false)}
          slides={[{ src: "/img/doc1.png" }, { src: "/img/nutri2.png" }]}
        />

        {/* Bloque 3  */}
        <button type="button" onClick={() => setOpen3(true)}>
          Open Lightbox 2
          <Image
            src={web4}
            width={350}
            height={350}
            alt="Otra descripción de la imagen"
            className="rounded"
          />
        </button>

        <Lightbox
          open={open3}
          close={() => setOpen3(false)}
          slides={[{ src: "/img/web4.png" }, { src: "/img/web4.2.png" }]}
        />

        {/* Bloque 4  */}

        <button type="button" onClick={() => setOpen4(true)}>
          Open Lightbox{" "}
          <Image
            src={comproyse}
            width={350}
            height={350}
            alt="Picture of the author"
            className="rounded"
          />
          <a
            className="text-white"
            href="https://comproyse.com/"
            target="_blank"
          >
            Ir al sitio web
          </a>
        </button>

        <Lightbox
          open={open4}
          close={() => setOpen4(false)}
          slides={[
            { src: "/img/comproyse.jpg" },
            { src: "/img/comproyse2.jpg" },
          ]}
        />

        {/* Bloque 5  */}

        <button type="button" onClick={() => setOpen5(true)}>
          <Image
            src={Inicio}
            width={350}
            height={350}
            alt="Picture of the author"
            className="rounded"
          />
          <h5 className="text-white">Bootcap Blochainverse</h5>
        </button>

        <Lightbox
          open={open5}
          close={() => setOpen5(false)}
          slides={[
            { src: "/img/INICIO.png" },
            { src: "/img/Paneldeventas.png" },
            { src: "/img/INVENTARIO.png" },
            { src: "/img/TIENDA.png" },
          ]}
        />


        
      </div>
    </section>
  );
};

export default index;
