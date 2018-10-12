"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_logger_1 = require("redux-logger");
const redux_thunk_1 = require("redux-thunk");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const user_1 = require("./user");
const reducer = redux_1.combineReducers({ user: user_1.default });
const loggerOptions = { collapsed: true };
const logger = redux_logger_1.createLogger(loggerOptions);
const middleware = redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, logger));
const store = redux_1.createStore(reducer, middleware);
exports.default = store;
__export(require("./user"));
//# sourceMappingURL=index.js.map