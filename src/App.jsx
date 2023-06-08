import axios from "axios";
import { useEffect, useState, useRef } from "react";
import GamesCard from "./components/GamesCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingBar from 'react-top-loading-bar'
import SkeletonCard from "./components/SkeletonCard";
import FakeBanner from "./components/FakeBanner"


function App() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(4);
  const [category, setCategory] = useState("TODOS");


  const ref = useRef(null);
  /* Asignación de direciónes para juegos y categorias */
  const gamesPath = "http://mi.zapto.org:3000/api/games";
  const categoriesPath = "http://mi.zapto.org:3000/api/collection";

  useEffect(() => {
    const use = async () => {
      const games = await axios(gamesPath);
      const categories = await axios(categoriesPath);
      if (categories.status !== 200)
        return alert("Error cargando la informacion de categorias");
      if (games.status !== 200)
        return alert("Error cargando la informacion de juegos");
      setGames(games.data);
      setGamesList(games.data)
      setCategories(categories.data);
    };
    use();
  }, []);

  const startSpinner = () => ref.current.continuousStart();
  const stopSpinner = () => ref.current.complete();

  async function handleFilter(categoryName = "") {
    setGames([]);
    startSpinner()
    setCategory(categoryName);
    const { data: gamesFilter } = await axios(gamesPath);
    let filterList = gamesFilter.filter(
      ({ category }) => category.name === categoryName
    );
    if (categoryName !== "TODOS") {
      setGames(filterList);
    } else {
      setGames(gamesFilter);
    }
    window.scrollTo(0, 0)
    stopSpinner();
  }

  const lastGamesIndex = currentPage * gamesPerPage;
  const firstGamesIndex = lastGamesIndex - gamesPerPage;
  const gamesFinal = games.slice(firstGamesIndex, lastGamesIndex);

  /* Variables para busqueda*/
  const [gamesList, setGamesList] = useState("");
  const [inputText, setInputText] = useState("");

  
  return (
       <div className="bg-[url('src/assets/img/wickedbackground.svg')]  min-h-screen bg-cover">
        <Header categories={categories} handleFilter={handleFilter} setInputText={setInputText} games={games} category={category} />
        <div className="container mx-auto ">
          <LoadingBar color="#f11946" ref={ref} shadow={true} />
          {games.length > 0 ? <GamesCard games={games} inputText={inputText} setGames={setGames} /> : <SkeletonCard />}
          <Pagination
            totalGames={games.length}
            gamesPerPage={gamesPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          
          
        </div>
        <Footer />
      </div>
  )
}

export default App;

