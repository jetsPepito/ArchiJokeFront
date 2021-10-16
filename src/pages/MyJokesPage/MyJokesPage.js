import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

import { AddJokeButton, JokeCard, PageContainer } from "../../components";
import api from "../../api/api";

const MyJokesPage = () => {
    const [jokes, setJokes] = useState([]);
    const userId = useSelector((state) => state.login.userId);
 
    useEffect(() => {
        api
            .get("jokes")
            .then((response) => {
                setJokes(response.data.filter(j => j.author_id === userId));
            })
            .catch(e => {
                console.error(e);
            });
    }, [userId]);

    return (
        <PageContainer title="My Jokes">
            <Stack container spacing={2} className="mb-10" >
                {
                    jokes.map((joke)=> (
                        <JokeCard key={joke._id} joke={joke}/>
                    ))
                }
            </Stack>
            <AddJokeButton />
        </PageContainer>
    );
};

export default MyJokesPage;