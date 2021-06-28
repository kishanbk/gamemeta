import axios from "axios";
import "./GamesList.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";


const GameList = () => {

    const [content, setContent] = useState([]);

    const fetchGames = async () => {
        const { data } = await axios.get(
            `https://allfaucetlist.000webhostapp.com/data.json`
        );
        setContent(data.results);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div>
            <span className="pageTitle">Games List</span>
            <div className="games">
                {
                    content && content.map((c) => (
                        <SingleContent key={c.id}
                            id={c.appid}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default GameList;