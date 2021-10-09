import React, {useEffect, useState} from "react";

import { JokeCard } from "../../components";
import axios from "axios";

const TopJokesPage = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/jokes")
            .then((response) => {
                setJokes(response.data);
            })
            .catch(e => {
                console.error(e);
            })
    }, []);

    return (
        <div>
            {
                jokes.map((joke)=> (
                    <JokeCard key={joke._id} joke={joke}/>
                ))
            }
        </div>
    );
};

export default TopJokesPage;