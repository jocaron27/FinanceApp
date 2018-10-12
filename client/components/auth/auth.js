"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("../../store");
const Auth = (props) => {
    const { name, displayName, handleSubmit, error } = props;
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit, name: name },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "email" },
                    React.createElement("small", null, "Email")),
                React.createElement("input", { name: "email", type: "text" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "password" },
                    React.createElement("small", null, "Password")),
                React.createElement("input", { name: "password", type: "password" })),
            React.createElement("div", null,
                React.createElement("button", { type: "submit" }, displayName)),
            error && error.response && React.createElement("div", null,
                " ",
                error.response.data,
                " ")),
        React.createElement("a", { href: "/auth/google" },
            displayName,
            " with Google")));
};
const mapLogin = (state) => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.user.error
    };
};
const mapSignup = (state) => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        error: state.user.error
    };
};
const mapDispatch = (dispatch) => {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const formName = evt.target.name;
            const email = evt.target.email.value;
            const password = evt.target.password.value;
            dispatch(store_1.auth(email, password, formName));
        }
    };
};
exports.Login = react_redux_1.connect(mapLogin, mapDispatch)(Auth);
exports.Signup = react_redux_1.connect(mapSignup, mapDispatch)(Auth);
//# sourceMappingURL=auth.js.map