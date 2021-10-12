import React, { useState } from "react";
import { useHistory } from "react-router";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import axios from "axios";

import { PageContainer } from "../../components";
import MyInput from "../../components/MyInput/MyInput";

const MyJokesPage = () => {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [validated, setValidated] = useState(false);

    const createJoke = () => {
        setValidated(true);

        if (!title || !body) {
            return;
        }

        axios
            .post("http://localhost:8000/jokes",
                {
                    title,
                    body,
                    date: Date.now(),
                    likes: 0,
                    dislikes: 0,
                    author: "AuthorName",
                },
                {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }
            )
            .then((_) => {
                history.push("/myJokes");
            })
            .catch(e => {
                console.error(e);
            });
    }

    return (
        <PageContainer title="Create a new Joke">
            <Box
                container
                spacing={3}
                color="blue"
                component="form"
                noValidate
                autoComplete="off"
            >
                <div>
                    <MyInput
                        error={validated && !title}
                        label="Title"
                        value={title}
                        onChange={body => setTitle(body.target.value)}
                        fullWidth
                        inputProps={{ maxLength: 50 }}
                    />
                </div>
                <div className="my-5">
                    <MyInput
                        error={validated && !body}
                        label="Joke's body"
                        multiline
                        rows={0}
                        value={body}
                        onChange={body => setBody(body.target.value)}
                        fullWidth
                    />
                </div>
                <div className="mt-10">
                    <Fab
                        variant="extended"
                        onClick={() => createJoke()}
                    >
                        <NavigationIcon sx={{ mr: 1 }} />
                        Send
                    </Fab>
                </div>
            </Box>
        </PageContainer>
    );
};

export default MyJokesPage;