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

  useEffect(() => {
    const use = async () => {
      setIsLoading(true);
      const games = await axios("http://localhost:3000/api/games");
      const categories = await axios("http://localhost:3000/api/collection");
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
      "http://localhost:3000/api/games"
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
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-center mb-4">Krapy</h1>
      <SearchInput categories={categories} handleFilter={handleFilter} />
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
  );
}

export default App;
