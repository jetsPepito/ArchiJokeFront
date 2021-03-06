import { Fab } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import MyInput from '../../components/MyInput/MyInput';
import colors from '../../utils/color';
import store from '../../store';

const LoginPage = () => {
    const { dispatch } = store;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [validated, setValidated] = useState(false);

    const login = async () => {
        setValidated(true);

        if (!email || !password) return;

        const res = await dispatch.login.login({ email, password });

        if (res && res.error) {
            if (res.body.response)
                setErrorMessage(res.body.response.data.detail);
            else
                setErrorMessage("Unable to login");
            return;
        }
    };

    return (
        <div style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                height: '100vh'
            }}
        >
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
                <div className="mt-5 mb-5">
                    <MyInput
                        type="password"
                        error={validated && !password}
                        label="Password"
                        value={password}
                        onChange={value => setPassword(value.target.value)}
                        fullWidth
                    />
                </div>
                {
                    validated &&
                    <div style={{ color: colors.red, fontSize: 12 }}>
                        {errorMessage}
                    </div>
                }
                <div className="mt-5 mb-2">
                    <Fab variant="extended" onClick={login}>
                        Login
                    </Fab>
                </div>
                <a
                    href="register"
                    style={{
                        color: colors.secondYellow,
                        fontSize: 14,
                    }}
                >
                    No account? Register now !
                </a>
            </Box>
        </div>
    )
};

export default LoginPage;