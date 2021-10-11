import React from "react";
import Paper from '@mui/material/Paper';
import { Button, Typography } from "@mui/material";

import colors from "../../utils/color";

const JokeCard = ({ joke }) => {
    return (
        <Paper elevation={3} className="px-3 pb-3" style={{ backgroundColor: colors.secondYellow }}>
            <div className="flex justify-between mt-2">
                <Typography variant="h5" marginTop={1} marginLeft={1}>{joke.title}</Typography>
                <Typography marginTop={2} marginRight={2}>{new Date(joke.date).toDateString()}</Typography>
            </div>
            <div className="my-4 ml-2">{joke.body}</div>
            <div className="flex justify-between">
                <div>
                    <Button style={{ color: "green" }}>+ {joke.likes}</Button>
                    <Button style={{ color: "red" }}>- {joke.dislikes}</Button>
                </div>
                <div className="mr-3">{joke.author}</div>
            </div>
        </Paper>
    );
};

export default JokeCard;