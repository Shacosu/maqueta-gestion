import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

export default function GamesCard({ games, inputText }) {
  if (inputText !== "") {
    games = [...games].sort((a, b) => a.price < b.price ? -1 : 1).filter((game) => game.title.toLowerCase().includes(inputText.toLowerCase()))
    window.scrollTo(0, 0)
  } else if (inputText === "") {
    games = games
    window.scrollTo(0, 0)
  }


  return (
    <div className='grid grid-cols-12 gap-4 mt-5 min-h-screen'>
      {games.map(({ _id, title, description, price, provider, updatedAt, url, image, category }) => (
        <div key={_id} className="md:col-span-2 col-span-12 rounded-t">
          {/* <OverlayTrigger trigger={["hover", "focus"]} placement="left" overlay={
            <Popover id="popover-basic" className="bg-white text-black min-w-[14rem] p-4 rounded">
              <Popover.Header className="font-bold">Metodos de Pago</Popover.Header>
              <Popover.Body className="flex gap-2">
                <img src="https://dlocal.com/wp-content/uploads/2020/04/webpay-redcompra-icon.svg" alt="logo" className="w-12 mx-auto" />
                <img src="https://dlocal.com/wp-content/uploads/2021/05/mercadopago-icon.svg" alt="logo" className="w-10 mx-auto" />
                <img src="https://dlocal.com/wp-content/uploads/2021/07/khipu-logo.svg" alt="logo" className="w-10 mx-auto" />
                <img src="https://dlocal.com/wp-content/uploads/2020/04/mastercard-icon.svg" alt="logo" className="w-10 mx-auto" />
              </Popover.Body>
            </Popover>
          }> */}
            <picture className="relative">
              <img src={image} alt={`img-${title}`} loading="lazy" className="h-[18rem] w-full object-fill rounded-t" />
              {/* <span className="absolute top-0 end-0 bg-yellow-500 p-2 rounded cursor-pointer">❤️</span> */}
              {/* {price === 0 ? <span className="absolute right-0 top-0  bg-yellow-500 p-2 rounded cursor-pointer">No disponible</span> : null} */}
            </picture>
          {/* </OverlayTrigger> */}
          <div className="bg-white min-h-[6rem] border-t-4 border-indigo-500 rounded-b text-sm text-black p-2">
            <h2 className="font-bold truncate">{title}</h2>
            <label className="font-semibold">Precio: </label>
            <span className="border-b border-black ">{new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency', prefix: "$" }).format(price)}</span>
            <label className="my-2 block font-semibold">Categoria: <span className="border-b border-black font-normal">{category.name}</span></label>
            <div className="">
              <h2 className="mb-2 font-semibold">Medios de Pago <CurrencyDollarIcon className="h-6 w-6 inline" /></h2>
              <div className="flex justify-around">
                <img src="https://dlocal.com/wp-content/uploads/2020/04/webpay-redcompra-icon.svg" alt="logo" className="w-10" />
                <img src="https://dlocal.com/wp-content/uploads/2021/05/mercadopago-icon.svg" alt="logo" className="w-10" />
                <img src="https://dlocal.com/wp-content/uploads/2021/07/khipu-logo.svg" alt="logo" className="w-10" />
                <img src="https://dlocal.com/wp-content/uploads/2020/04/mastercard-icon.svg" alt="logo" className="w-10" />
              </div>
            <div>
              <a href={price !== 0 ? url : null} target="_blank"
                className={`block text-center uppercase bg-purple-800 hover:bg-purple-900 p-1 text-white rounded tracking-wider mt-2 ${price === 0 ? "!bg-gray-500 cursor-not-allowed" : ''}`}>
                {provider.replace(/\.(com|org|cl)\b/g, "").replace("www.", "")}
              </a>
            </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
