import React from 'react'
import "./SearchInput.css"
import logo from '../assets/img/Logokrappy.png'

export default function SearchInput({ categories, handleFilter, setInputText}) {
  return (
    <>  
    <header className='bg-slate-800 flex items-center justify-around gap-2 ' > 
    <div className='flex items-center  '> 
    <img src='https://cdn.discordapp.com/attachments/1092700290840543252/1106334861775618088/Logo.png'  className='h-20 w-20 '/>
    <h1 className='font-mono text-2xl'>KrappyGames</h1>
    <nav className='ml-4'><a className='border-b'href='#' >Comunidad</a></nav>
    </div>
    
      <div className="verflow-visible"> 
        <input
        type="text"
        placeholder="Resident..."
        onChange={(e) => setInputText(e.target.value)}
        className="  p-2 rounded outline-none  text-black mr-2 "
        />
        <button className=" bg-purple-800 p-2  rounded" >Buscar</button>
</div>
    
    
    
   
    </header>

    <div>
    <nav className='nav bg-slate-700 h-16 flex items-center justify-center '>
        <ul className='nav_menu'>
          <li><a href="#"onClick={() => handleFilter('PC')}>PC</a></li>
          <li><a href="#"onClick={() => handleFilter('XBOX')}>XBOX</a></li>
          <li><a href="#"onClick={() => handleFilter('SWITCH')}>SWITCH</a></li>
          <li><a href="#"onClick={() => handleFilter('PS5')}>PS5</a></li>
          <li><a href="#" onClick={() => handleFilter('TODOS')}>TODOS</a></li>
        </ul>
      </nav>
    </div>
    </>
  )

}
