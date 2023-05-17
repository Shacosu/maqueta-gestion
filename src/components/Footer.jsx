import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-auto text-white text-center ">
        Sitio web creado en conjunto de la Universidad de las Americas &copy; {new Date().getFullYear()} <br />
        Mencion especial a la profesora <a href="https://github.com/malegria01" target="_blank" rel="noreferrer" className="underline">Melissa Alegria</a> por su aporte en el desarrollo de este sitio web.
    </footer>
  )
}
