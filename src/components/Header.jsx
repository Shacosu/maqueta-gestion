import React from 'react'
import SearchInput from "./SearchInput"
import Skeleton from "react-loading-skeleton";
import { ClockIcon } from '@heroicons/react/24/solid';

export default function Header({ categories, handleFilter, setInputText, games }) {
  return (
    <header className="grid grid-cols-12">
      <p className="bg-gray-900 h-8 w-full text-sm font-bold col-span-12 justify-center items-center flex ">
        <ClockIcon className="h-6 w-6 text-gray-500 inline" />
        Precios actualizados cada 12 horas
      </p>
      <div>

      </div>
      <nav className="col-span-12 flex items-center  gap-4 bg-gray-800 min-h-20 p-4 ">
        <div className="flex items-center justify-around w-full px-4">
          <img src="https://cdn.discordapp.com/attachments/1092700290840543252/1106334861775618088/Logo.png" alt="logo" className="w-20" />
          <h1 className="text-3xl font-black ">KrapyGames</h1>
          <ul className="col-span-12 flex gap-4 ml-4">
            <li>
              <a href="/" className="font-bold hover:text-yellow-500">Inicio</a>
            </li>
            <li>
              <a href="/about" className="font-bold hover:text-yellow-500">Comunidad</a>
            </li>
          </ul>
          <div className="flex justify-end w-full col-span-12">
            <SearchInput categories={categories} handleFilter={handleFilter} setInputText={setInputText} games={games} />
          </div>
        </div>


      </nav>
      <div className="col-span-12 flex justify-center gap-10 bg-slate-700 h-10 items-center">
        {categories.length > 0 ? categories.map(({ _id, name }) => (
          <div key={_id}>
            <button className='border-b-2 border-transparent hover:border-yellow-500 hover:w-full transition-all duration-500 text-lg' onClick={() => handleFilter(name)}>{name}</button>
          </div>
        )): Array(5).fill(0).map((_, index) => <Skeleton width={45} height={25} key={index} />)}
      </div>
    </header>
  )
}
