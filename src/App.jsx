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
  /* Variables para busqueda*/
  const [inputText, setInputText] = useState("");

  /* funcion para busqueda */
  function inputHandler(e) {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    print(lowerCase)
  }

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

  return (
    <div className="fondos">
      <div className="container mx-auto p-10">
      <SearchInput categories={categories} handleFilter={handleFilter} inputHandler={inputHandler}/>
      {!!loading && <Spinner />}
      <GamesCard games={gamesFinal} />
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

