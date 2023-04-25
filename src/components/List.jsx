import { React, useState ,useEffect} from 'react'
import data from "./ListData.json"

const gamesPath = "http://mi.zapto.org:3000/api/games";
/* const [games, setGames] = useState([]);


useEffect(() => {
    const use = async () => {
      const games = await axios(gamesPath);
      if (games.status !== 200)
        return alert("Error cargando la informacion de juegos");
        setGames(games.data);
    };
    use();
  }, []);
*/
function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List
