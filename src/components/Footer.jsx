import React from 'react'
import FakeBanner from './FakeBanner'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-white text-center bg-slate-800 h-48">
      <FakeBanner />
        Sitio web creado en conjunto de la Universidad de las Americas &copy; {new Date().getFullYear()}
        <p>Mencion especial a la profesora <a href="https://github.com/malegria01" target="_blank" rel="noreferrer" className="underline">Melissa Alegria</a> por su aporte en el desarrollo de este sitio web.</p>
    </footer>
  )
}
