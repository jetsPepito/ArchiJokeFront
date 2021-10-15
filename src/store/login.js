import jwtDecode from "jwt-decode";
import api from "../api/api";

const defaultState = {
    isConnected: false,
    token: '',
    userId: -1,
    userName: '',
}

const login = {
    state: JSON.parse(window.localStorage.getItem('loginState')) || defaultState,
    reducers: {
        LOGIN: (_, payload) => {
            window.localStorage.setItem('loginState', JSON.stringify(payload));
            return payload;
        },
        LOGOUT: (_, _payload) => {
            window.localStorage.setItem('loginState', JSON.stringify(defaultState));
            return defaultState;
        },
    },
    effects: (dispatch) => ({
        async login(payload) {
            try {
                return api
                    .post('users/login', payload)
                    .then((response) => {
                        const decoded = jwtDecode(response.data);
                        dispatch.login.LOGIN({
                            isConnected: true,
                            token: response.data,
                            userId: decoded.userId,
                            userName: decoded.userName
                        });
                    })
                    .catch((err) => {
                        console.error('Error while login: \n', err);
                        return {
                            error: true,
                            body: err
                        };
                    });
            } catch (err) {
                console.error('Error while login: \n', err);
                return {
                    error: true,
                    body: err
                };
            }
        },
        async logout() {
            try {
                dispatch.login.LOGOUT();
                return true;
            } catch (e) {
                console.error('Error while logout: \n', e);
                return false;
            }
        },
    }),
};
  
export default login;