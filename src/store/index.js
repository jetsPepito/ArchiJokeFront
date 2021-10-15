import { init } from '@rematch/core';
import login from './login';

const store = init({ models: { login } });

export default store;