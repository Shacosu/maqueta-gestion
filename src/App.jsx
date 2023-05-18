import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import Spinner from "./components/Spinner";
import GamesCard from "./components/GamesCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";



function App() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(4);
  /* Asignación de direciónes para juegos y categorias */
  const gamesPath = "http://mi.zapto.org:3000/api/games";
  const categoriesPath = "http://mi.zapto.org:3000/api/collection";

  useEffect(() => {
    const use = async () => {
      setIsLoading(true);
      const games = await axios(gamesPath);
      const categories = await axios(categoriesPath);
      if (categories.status !== 200)
        return alert("Error cargando la informacion de categorias");
      if (games.status !== 200)
        return alert("Error cargando la informacion de juegos");
      setGames(games.data);
      setGamesList(games.data)
      setCategories(categories.data);
      setIsLoading(false);
    };
    use();
  }, []);

  async function handleFilter(categoryName = "") {
    setGames([]);
    setIsLoading(true);
    const { data: gamesFilter } = await axios(
      gamesPath
    );
    let filterList = gamesFilter.filter(
      ({ category }) => category.name === categoryName
    );
    if (categoryName !== "TODOS") {
      setGames(filterList);
    } else {
      setGames(gamesFilter);
    }
    setIsLoading(false);
  }

  const lastGamesIndex = currentPage * gamesPerPage;
  const firstGamesIndex = lastGamesIndex - gamesPerPage;
  const gamesFinal = games.slice(firstGamesIndex, lastGamesIndex);

    /* Variables para busqueda*/
    const [gamesList, setGamesList ] = useState("");
    const [inputText, setInputText] = useState("");

    

  return (
    <div className="fondos">
     <SearchInput categories={categories} handleFilter={handleFilter} setInputText={setInputText} />
      <div className="container mx-auto p-10">
      {!!loading && <Spinner />}
      <GamesCard games={games} inputText={inputText} setGames={setGames}/>
      <Pagination
        totalGames={games.length}
        gamesPerPage={gamesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </div>

    </div>
    
  );
}

export default App;

