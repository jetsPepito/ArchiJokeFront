import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Fab } from '@mui/material';
import { Box } from '@mui/system';

import MyInput from '../../components/MyInput/MyInput';
import colors from '../../utils/color';
import api from '../../api/api';

const RegisterPage = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [validated, setValidated] = useState(false);

    const register = async () => {
        setValidated(true);

        if (!email || !password || !name) return;

        api
            .post(
                "users/register",
                {
                    email,
                    password,
                    name
                }
            )
            .then((res) => {
                history.push('login');
            })
            .catch((err) => {
                setErrorMessage("Unable to register");
            });
    };

    return (
        <div style={
            {
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                height: '100vh'
            }
        }>
            <div className="absolute top-10 left-10">
                <Fab variant="extended" style={{backgroundColor: colors.yellow}} href="login">
                    Back
                </Fab>
            </div>
            <Box
                width="50%"
                container
                component="form"
                noValidate
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <div>
                    <MyInput
                        type="email"
                        error={validated && !email}
                        label="Email"
                        value={email}
                        onChange={value => setEmail(value.target.value)}
                        fullWidth
                    />
                </div>
                <div className="mt-5">
                    <MyInput
                        type="password"
                        error={validated && !password}
                        label="Password"
                        value={password}
                        onChange={value => setPassword(value.target.value)}
                        fullWidth
                    />
                </div>
                <div className="mt-5 mb-5">
                    <MyInput
                        error={validated && !name}
                        label="Name"
                        value={name}
                        onChange={value => setName(value.target.value)}
                        fullWidth
                    />
                </div>
                {
                    validated &&
                    <div style={{ color: colors.red, fontSize: 12 }}>
                        {errorMessage}
                    </div>
                }
                <div className="mt-5">
                    <Fab variant="extended" onClick={register} >
                        Register
                    </Fab>
                </div>
            </Box>
        </div>
    )
};

export default RegisterPage;