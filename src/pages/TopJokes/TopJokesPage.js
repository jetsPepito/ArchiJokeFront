import React from "react";

import { JokeCard } from "../../components";

const TopJokesPage = () => {
    return (
        <JokeCard joke={{
            title: "Title of the joke",
            body: "Body of the joke",
            date: "09/10/2021",
            likes: 315,
            dislikes: 58,
            author: "Author"
        }}/>
    );
};

export default TopJokesPage;