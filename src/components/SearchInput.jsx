import { useEffect, useState } from 'react'

export default function SearchInput({ categories, handleFilter, setInputText, games }) {
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  function handleButtonFilter(e) {
    e.preventDefault();
    if (text === "") return alert("Debes ingresar un texto para buscar");
    setInputText(text)
    setIsClicked(true);
  }

  
  useEffect(() => {
    if (text === "") {
      setInputText("")
    }
  }, [text])

  const filteredGames = games.filter((x) => x.title.toLowerCase().includes(text.toLowerCase()));

  return (
      <form onSubmit={handleButtonFilter} className="flex justify-end gap-4 w-full relative">
        <input
          type="search"
          placeholder="Buscar juego..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 rounded outline-none w-1/6 text-black"
        />
        <div className="absolute top-10 z-10 bg-white">
          {/* {isClicked && text && filteredGames.map(({ title, image, price }, idx) => (
            <ul key={idx} className="rounded bg-white ">
              <li className=" text-black flex p-2 border-b gap-2 cursor-pointer" onClick={() => {
                setText(title)
                setIsClicked(false);
                }}>
                <img src={image} alt="" className="w-6 h-6" />
                <p className="truncate">{title}</p>
                <p className="font-bold bg-purple-800 rounded text-white px-2">{new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency', prefix: "$" }).format(price)}</p>
              </li>
            </ul>
          ))} */}
          </div>
        <button className="bg-purple-800 p-2 rounded">Buscar</button>
      </form>

  )
}
