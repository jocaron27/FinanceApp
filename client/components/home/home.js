"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #region ----------------------------- Imports --------------------------------------
const React = require("react");
const react_redux_1 = require("react-redux");
// #endregion
// #region ---------------------------- Component -------------------------------------
exports.Home = (props) => {
    const { email } = props;
    return (React.createElement("div", null,
        React.createElement("h3", null,
            "Welcome, ",
            email)));
};
// #endregion
// #region -------------------------- Redux Connect -----------------------------------
const mapState = (state) => {
    return {
        email: state.user.email
    };
};
exports.default = react_redux_1.connect(mapState)(exports.Home);
// #endregion
//# sourceMappingURL=home.js.map