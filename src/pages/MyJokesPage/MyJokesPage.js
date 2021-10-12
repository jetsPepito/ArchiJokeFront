import React, { useState } from "react";
import { Stack } from "@mui/material";

import { JokeCard, PageContainer } from "../../components";

const MyJokesPage = () => {
    const [jokes, setJokes] = useState([]);

    return (
        <PageContainer title="My Jokes">
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

export default MyJokesPage;