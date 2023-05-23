import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export default function GamesCard({ games, inputText }) {
  if (inputText !== "") {
    games = games.sort((a, b) => a.price < b.price ? -1 : 1).filter((game) => {
      return game.title.toLowerCase().includes(inputText.toLowerCase())
    })

  }


  return (
    <div className='grid grid-cols-12 gap-4 mt-5 min-h-screen'>
      {games.map(({ _id, title, description, price, provider, updatedAt, url, image, category }) => (
        <div key={_id} className="md:col-span-2 sm:col-span-6 rounded-t">
          <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={
            <Popover id="popover-basic" className="bg-white text-black min-w-[10rem] p-4 rounded">
              <Popover.Header className="font-bold">Metodos de Pago</Popover.Header>
              <Popover.Body className="flex gap-2">
                <img src="https://dlocal.com/wp-content/uploads/2020/04/webpay-redcompra-icon.svg" alt="logo" className="w-10 mx-auto" />
                <img src="https://dlocal.com/wp-content/uploads/2021/05/mercadopago-icon.svg" alt="logo" className="w-10 mx-auto" />
                <img src="https://dlocal.com/wp-content/uploads/2021/07/khipu-logo.svg" alt="logo" className="w-10 mx-auto" />
                <img src="https://dlocal.com/wp-content/uploads/2020/04/mastercard-icon.svg" alt="logo" className="w-10 mx-auto" />
              </Popover.Body>
            </Popover>
          }>
            <picture className="relative">
              <img src={image} alt={`img-${title}`} loading="lazy" className="h-[18rem] w-full object-fit rounded-t" />
              {/* <span className="absolute top-0 end-0 bg-yellow-500 p-2 rounded cursor-pointer">❤️</span> */}
            </picture>
          </OverlayTrigger>
          <div className="bg-white min-h-[6rem] border-t-4 border-indigo-500 rounded-b text-sm text-black p-2">
            <label className="font-bold">Precio: </label>
            <span className="font-bold bg-purple-800 rounded text-white px-2">{new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency', prefix: "$" }).format(price) || <Skeleton />}</span>
            <label className="font-bold mb-2 block">Categorías: </label>
            <span className="bg-green-500 text-white px-4 py-1 font-bold">{category.name || <Skeleton count={3} />}</span>
            <div>
              {/* {(() => {
                switch (provider) {
                  case "juegosdigitaleschile.com": 
                  return <a href={price !== 0 ? url : null} target="_blank" className={`block text-center bg-yellow-600 hover:bg-yellow-700 p-1 text-white rounded font-bold mt-2 ${price === 0 ? "!bg-gray-500 cursor-not-allowed" : ''}`}>{provider}</a>;
                  case "chilejuegosdigitales.cl":
                  return <a href={url} target="_blank" className="block text-center bg-red-600 hover:bg-red-900 p-1 text-white rounded font-bold mt-2">{provider}</a>;
                  case "eneba.com":
                  return <a href={url} target="_blank" className="block text-center bg-purple-600 hover:bg-purple-700 p-1 text-white rounded font-bold mt-2">{provider}</a>;
                  default:
                    return <a href={url} target="_blank" className="block text-center bg-green-600 hover:bg-green-600 p-1 text-white rounded font-bold mt-2">{provider}</a>;
                }
              })()} */}
              <a href={price !== 0 ? url : null} target="_blank" className={`block text-center bg-purple-800 hover:bg-purple-900 p-1 text-white rounded font-bold mt-2 ${price === 0 ? "!bg-gray-500 cursor-not-allowed" : ''}`}>{provider.replace(/\.(com|org|cl)\b/g, "")}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
