import React, {useEffect, useState} from "react";

import { JokeCard, PageContainer } from "../../components";
import axios from "axios";
import {Grid, Stack, Typography} from "@mui/material";

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
        <PageContainer title="Best Jokes">
            <Stack container spacing={2} >
                {
                    jokes.map((joke)=> (
                        <JokeCard key={joke._id} joke={joke}/>
                    ))
                }
            </Stack>
        </PageContainer>
    );
};

export default TopJokesPage;