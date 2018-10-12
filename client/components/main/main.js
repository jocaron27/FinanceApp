"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../../store");
const Main = (props) => {
    const { children, handleClick, isLoggedIn } = props;
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hello World"),
        React.createElement("nav", null, isLoggedIn
            ? React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: "/home" }, "Home"),
                React.createElement("a", { href: "#", onClick: handleClick }, "Logout"))
            : React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: "/login" }, "Login"),
                React.createElement(react_router_dom_1.Link, { to: "/signup" }, "Sign Up"))),
        React.createElement("hr", null),
        children));
};
const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id
    };
};
const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            dispatch(store_1.logout());
        }
    };
};
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapState, mapDispatch)(Main));
//# sourceMappingURL=main.js.map