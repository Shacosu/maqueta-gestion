import React from 'react'
import SearchInput from "./SearchInput"
import Skeleton from "react-loading-skeleton";
import { ClockIcon } from '@heroicons/react/24/solid';

export default function Header({ categories, handleFilter, setInputText, games, category }) {

  return (
    <header className="grid grid-cols-12 sticky top-0 z-10">
      <p className="bg-gray-900 h-8 w-full text-sm font-bold col-span-12 justify-center items-center flex ">
        <ClockIcon className="h-6 w-6 text-gray-500 inline" />
        Precios actualizados cada 12 horas
      </p>
      <div>

      </div>
      <nav className="col-span-12 flex items-center  gap-4 bg-gray-800 min-h-20 p-4 ">
        <div className="flex items-center w-full  px-8">
          <img src="https://cdn.discordapp.com/attachments/1092700290840543252/1106334861775618088/Logo.png" alt="logo" className="w-20" />
          <h1 className="text-xl font-black ">KrapyGames</h1>
          <ul className="col-span-12 flex gap-4 ml-4">
            <li>
              <a href="/" className="font-bold hover:text-yellow-500">Inicio</a>
            </li>
            <li>
              <a href="/about" className="font-bold hover:text-yellow-500">Comunidad</a>
            </li>
          </ul>
          <div className="flex w-full col-span-12">
            <SearchInput categories={categories} handleFilter={handleFilter} setInputText={setInputText} games={games} />
          </div>
        </div>


      </nav>
      <div className="col-span-12 flex justify-center gap-10 bg-slate-700 h-10 items-center nav-effect">
        <ul>
        {categories.length > 0 ? categories.map(({ _id, name }) => (
          <li key={_id} onClick={() => handleFilter(name)} className={`cursor-pointer text-lg ${category.toLowerCase() === name.toLowerCase() && "text-yellow-500" }`}>
            {name}
          </li>
        )): (
          <ul>
            <li className="text-lg">
              <Skeleton width={45} height={20} />
            </li>
            <li className="text-lg">
              <Skeleton width={45} height={20} />
            </li>
            <li className="text-lg">
              <Skeleton width={45} height={20} />
            </li>
            <li className="text-lg">
              <Skeleton width={45} height={20} />
            </li>
            <li className="text-lg">
              <Skeleton width={45} height={20} />
            </li>
          </ul>
        )}
        </ul>
      </div>
      
    </header>
  )
}
