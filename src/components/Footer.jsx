import React from 'react'

const footers = () => {
  const correoDestino = 'raudamejia08@outlook.com';
  return (
    <footer className="py-4 text-white bg-gray-800 ">
      <div className="flex items-center justify-center space-x-4">
        <div >
        <img src="img/logo.png" className="h-12 min-h-min" alt="Flowbite Logo" />
        </div>
        {/* Enlaces de Redes Sociales */}
        <div>
          <a href="https://www.facebook.com/DanielDesing20" className="text-white hover:text-gray-500">
            Facebook
          </a>
          <span className="mx-2">•</span>
          <a href="#" className="text-white hover:text-gray-500">
              Instagram
          </a>
          {/* Agrega más enlaces según sea necesario */}
        </div>

        {/* Información de contacto a la derecha */}
        <div className="ml-auto">
           <p><a href={`mailto:${correoDestino}`} className="text-white hover:text-gray-500" >   Correo: raudamejia08@outlook.com </a> </p> 
          <p>Teléfono: (503) 77960054</p>
          {/* Agrega más información de contacto según sea necesario */}
        </div>
      </div>
    </footer>
  )
}

export default footers