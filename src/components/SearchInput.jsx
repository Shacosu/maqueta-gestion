import React from 'react'

export default function SearchInput({ categories, handleFilter }) {
  return (
    <div>
    <div className="flex justify-center w-3/6 mx-auto gap-2">
        <input
        type="text"
        placeholder="Busca aqui tu juego preferido..."
        className="w-full p-2 rounded outline-none text-black"
        />
        <button className="bg-purple-800 p-2 rounded">Buscar</button>
        </div>
        <div className="flex  mt-5 justify-center gap-10">
        {categories.map(({ _id, name}) => (
          <div key={_id}>
            <button className='bg-yellow-700 px-4 rounded font-bold' onClick={() => handleFilter(name)}>{name}</button>
          </div>
        ))}
      </div>
    </div>
    
  )
}
