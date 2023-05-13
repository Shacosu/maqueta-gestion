import React from 'react'
import CurrencyFormat from 'react-currency-format';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export default function GamesCard({ games, inputText, setGames }) {
  if (inputText !== "") {
    games = games.filter((game) => {
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
              <img src={image} alt={`img-${title}`} className="h-[18rem] w-full object-fit rounded-t" />
              {/* <span className="absolute top-0 end-0 bg-yellow-500 p-2 rounded cursor-pointer">❤️</span> */}
            </picture>
          </OverlayTrigger>
          <div className="bg-white min-h-[6rem] border-t-4 border-indigo-500 rounded-b text-sm text-black p-2">
            <label className="font-bold">Precio: </label>
            <span className="font-bold bg-purple-800 text-white px-2"><CurrencyFormat value={price} displayType={'text'} thousandSeparator="." decimalSeparator="" prefix={'$'} renderText={value => value} /></span>
            <label className="font-bold mb-2 block">Categorías: </label>
            <span className="bg-green-500 text-white px-4 py-1 font-bold">{category.name}</span>
            <div>
              {(() => {
                switch (provider) {
                  case "juegosdigitaleschile.com": 
                  return <a href={url} target="_blank" className="block text-center bg-yellow-600 p-1 text-white uppercase font-bold mt-2">{provider}</a>;
                  case "chilejuegosdigitales.cl":
                  return <a href={url} target="_blank" className="block text-center bg-red-600 p-1 text-white uppercase font-bold mt-2">{provider}</a>;
                  case "eneba.com":
                  return <a href={url} target="_blank" className="block text-center bg-purple-600 p-1 text-white uppercase font-bold mt-2">{provider}</a>;
                  default:
                    return <a href={url} target="_blank" className="block text-center bg-green-600 p-1 text-white uppercase font-bold mt-2">{provider}</a>;
                }
              })()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
