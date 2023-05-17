import { useEffect, useState } from 'react'

export default function SearchInput({ categories, handleFilter, setInputText, games }) {
  const [text, setText] = useState("")
  function handleButtonFilter(e) {
    e.preventDefault();
    if (text === "") return alert("Debes ingresar un texto para buscar");
    // setText("") 
    setInputText(text)
  }
  useEffect(() => {
    if (text === "") {
      setInputText("")
    }
  }, [text])

  const filteredGames = games.filter((x) => x.title.toLowerCase().includes(text.toLowerCase()));

  return (
    <>
      <div className="flex items-center">
        <form onSubmit={handleButtonFilter} className="flex gap-4 w-full relative">
          <input
            type="search"
            placeholder="Buscar juego..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 rounded outline-none w-full text-black"
          />
          <div className="absolute top-10 z-10">
            {text && filteredGames.map(({ title, image, price }, idx) => (
              <ul key={idx} className="rounded bg-white">
                <li className=" text-black flex p-2 border-b gap-2 cursor-pointer" onClick={() => setInputText(title)}>
                  <img src={image} alt="" className="w-6 h-6" />
                  <p className="truncate">{title}</p>
                  <p className="font-bold bg-purple-800 rounded text-white px-2">{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency', prefix: "$"}).format(price)}</p>
                </li>
              </ul>
            ))}</div>
          <button className="bg-purple-800 p-2 rounded">Buscar</button>
        </form>


      </div>
      <div className="flex mt-5 justify-center gap-10">
        {categories.map(({ _id, name }) => (
          <div key={_id}>
            <button className='bg-yellow-900 p-1 px-4 rounded font-bold' onClick={() => handleFilter(name)}>{name}</button>
          </div>
        ))}
      </div>
    </>
  )
}
