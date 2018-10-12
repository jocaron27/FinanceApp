"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const history_1 = require("../history");
const log = require("loglevel");
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const defaultUser = {};
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
exports.me = () => dispatch => axios_1.default.get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => log.error(err));
exports.auth = (email, password, method) => dispatch => axios_1.default.post(`/auth/${method}`, { email, password })
    .then(res => {
    dispatch(getUser(res.data));
    history_1.default.push('/home');
})
    .catch(error => dispatch(getUser({ error })));
exports.logout = () => dispatch => axios_1.default.post('/auth/logout')
    .then(_ => {
    dispatch(removeUser());
    history_1.default.push('/login');
})
    .catch(err => log.error(err));
function default_1(state = defaultUser, action) {
    switch (action.type) {
        case GET_USER:
            return action.user;
        case REMOVE_USER:
            return defaultUser;
        default:
            return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=user.js.map