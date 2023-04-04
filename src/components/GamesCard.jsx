import React from 'react'

export default function GamesCard({ games }) {
  return (
    <div className='grid grid-cols-12 gap-4 mt-5 min-h-screen'>
    {games.map(({_id, title, description, price, provider, updatedAt, url, image, category }) => (
      <div key={_id} className="col-span-2 ">
        <picture className="relative">
          <img src={image} alt={`img-${title}`} className="h-[18rem] w-full object-fit"  />
          {/* <span className="absolute top-0 end-0 bg-yellow-500 p-2 rounded cursor-pointer">❤️</span>fgdhgrf */}
        </picture>

        <div className="bg-white min-h-[6rem] border-t-4 border-indigo-500 rounded-b text-sm text-black p-2">
          <p className="font-bold">Proveedor: </p>
          <span>{provider}</span>
          <p className="font-bold">Precio: </p>
          <span>${price}</span>
          <p className="font-bold">Actualizado: </p>
          <span>{updatedAt.substring(0, 10)} / {updatedAt.substring(11, 19)}</span>
          <p className="font-bold">Categoria: </p>
          <span>{category.name}</span>
          <a href={url} target="_blank" className="block text-center bg-purple-800 p-1 text-white uppercase font-bold mt-2">Ir a la pagina</a>

        </div>
      </div>
    ))}
  </div>
  )
}
