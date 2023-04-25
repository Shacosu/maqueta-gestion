import React from 'react'

export default function SearchInput({ categories, handleFilter, setInputText}) {
  return (
    <div>
    <div className="flex justify-center items-center gap-2">
    <div className="nameDiv" >
        <h1 className="text-3xl text-left mb-4">Krapy</h1>
    </div>
        <input
        type="text"
        placeholder="Busca aqui tu juego preferido..."
        onChange={(e) => setInputText(e.target.value)}
        className="p-2 rounded outline-none w-3/6 text-black"
        />
        <button className="bg-purple-800 p-2  rounded" >Buscar</button>

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
