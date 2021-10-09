import React from "react";
import Paper from '@mui/material/Paper';
import { Button, Typography } from "@mui/material";

import colors from "../../utils/color";

const JokeCard = ({ joke }) => {
    return (
        <Paper elevation={3} className="px-3 pb-3" style={{ backgroundColor: colors.secondGray }}>
            <div className="flex justify-between"> 
                <Typography variant="h6">{joke.title}</Typography>
                <Typography variant="h6">{new Date(joke.date).toDateString()}</Typography>
            </div>
            <div>{joke.body}</div>
            <div className="flex justify-between">
                <div>
                    <Button>+ {joke.likes}</Button>
                    <Button>- {joke.dislikes}</Button>
                </div>
                <div>{joke.author}</div>
            </div>
        </Paper>
    );
};

export default JokeCard;