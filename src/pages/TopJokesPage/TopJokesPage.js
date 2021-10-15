import React, {useEffect, useState} from "react";
import { Stack } from "@mui/material";

import { AddJokeButton, JokeCard, PageContainer } from "../../components";
import api from "../../api/api";

const TopJokesPage = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        api
            .get("jokes")
            .then((response) => {
                setJokes(response.data);
            })
            .catch(e => {
                console.error(e);
            });
    }, []);

    return (
        <PageContainer title="Top Jokes">
            <Stack container spacing={2} className="mb-10" >
                {
                    jokes.map((joke) => (
                        <JokeCard key={joke._id} joke={joke}/>
                    ))
                }
            </Stack>
            <AddJokeButton />
        </PageContainer>
    );
};

export default TopJokesPage;