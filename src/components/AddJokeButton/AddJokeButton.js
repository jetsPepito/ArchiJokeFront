import React from "react";
import { useHistory } from "react-router";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Add';


const AddJokeButton = () => {
    const history = useHistory();

    return (
        <Fab
            variant="extended"
            style={{ position: "fixed", right: 24, bottom: 24 }}
            onClick={() => history.push("addJoke")}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          New Joke
        </Fab>
    );
};

export default AddJokeButton;