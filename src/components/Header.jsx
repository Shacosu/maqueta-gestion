import React from 'react'
import SearchInput from "./SearchInput"
import { ClockIcon } from '@heroicons/react/24/solid';

export default function Header({ categories, handleFilter, setInputText, games }) {
  return (
    <header>
      <p className="bg-gray-900 h-8 w-full text-sm font-bold flex justify-center items-center">
        <ClockIcon className="h-6 w-6 text-gray-500" />
        Precios actualizados cada 12 horas
      </p>
      <nav className="flex justify-around px-4 bg-gray-800 min-h-20 p-4 ">
        <a className="flex items-center gap-2" href="/">
          <img src="https://cdn.discordapp.com/attachments/1092700290840543252/1106334861775618088/Logo.png" alt="logo" className="w-20 mx-auto" />
          <h1 className="text-3xl font-black">KrapyGames</h1>
        </a>
        <div>
          <SearchInput categories={categories} handleFilter={handleFilter} setInputText={setInputText} games={games}/>
        </div>
      </nav>
    </header>
  )
}
