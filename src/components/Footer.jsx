import React from 'react'

const footers = () => {



    
    return (
        <footer className="pt-10 bg-slate-800">
            <div className="max-w-screen-xl px-4 mx-auto text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <img src="/img/logo.png" className="w-32" />
                        <p className="max-w-md text-white">
                            "Nunca es tarde para diseñar tus sueños"
                        </p>
                        
                    </div>
                    <div className="mt-6">
                        <p className="font-semibold text-white">Sígueme en mis redes sociales</p>
                        <div className="flex items-center gap-3 mt-3 text-white sm:block">
                            <a href="https://www.facebook.com/DanielDesing20 " target="_blank"  >
                              Facebook
                            </a>
                            <a href="https://www.instagram.com/danielmejia_disenadorweb/" className="block mt-0 sm:mt-3"  target="_blank">
                                Instagram
                            </a>
                            <a href="mailto:raudamejia08@outlook.com" className="block mt-0 sm:mt-3"  target="_blank">
                                Correo : raudamejia08@outlook.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-10 mt-10 text-white border-t md:text-center">
                    <p>© 2023 Daniel Mejia</p>
                </div>
            </div>
        </footer>
    )
}
  


  


export default footers