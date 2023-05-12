import React from 'react'
import SearchInput from "./SearchInput"

export default function Header({ categories, handleFilter, setInputText }) {
  return (
    <header>
        <p className="bg-gray-900 h-6 text-center w-full text-sm font-bold">Precios actualizados cada 12 horas</p>

        <nav className="flex justify-around px-4 bg-gray-800 min-h-20 p-4 ">
            <div className="flex items-center gap-2">
                {/* <img src="https://i.imgur.com/7I9Was5.png" alt="logo" className="w-40" /> */}
                <img src="https://cdn.discordapp.com/attachments/1092700290840543252/1106334861775618088/Logo.png" alt="logo" className="w-20 mx-auto" />
                <h1 className="text-3xl font-bold  tracking-wide">KrapyGames</h1>
            </div>
            <div className="">
                <SearchInput categories={categories} handleFilter={handleFilter} setInputText={setInputText} />
            </div>
        </nav>
    </header>
  )
}
