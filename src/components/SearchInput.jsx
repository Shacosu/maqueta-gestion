import { useEffect, useState } from 'react'

export default function SearchInput({ categories, handleFilter, setInputText }) {
  const [text, setText] = useState("")
  function handleButtonFilter(e) {
    e.preventDefault();
    if (text === "") return alert("Debes ingresar un texto para buscar");
    setInputText(text)
  }
  useEffect(() => {
    if (text === "") {
      setInputText("")
    }
  }, [text])
  return (
    <>
      <div className="flex justify-center items-center ">
        <form onSubmit={handleButtonFilter} className="flex gap-4">
          <input
            type="search"
            placeholder="Buscar juego..."
            onChange={(e) => setText(e.target.value)}
            className="p-2 rounded outline-none w-full text-black"
          />
          <button className="bg-purple-800 p-2 rounded">Buscar</button>
        </form>


      </div>
      <div className="flex mt-5 justify-center gap-10">
        {categories.map(({ _id, name }) => (
          <div key={_id}>
            <button className='bg-yellow-700 px-4 rounded font-bold' onClick={() => handleFilter(name)}>{name}</button>
          </div>
        ))}
      </div>
    </>
  )
}
