import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {

    state = {
        isLoggedIn: false
    }

    loginout = () => {
        console.log('shit');
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, loginout: this.loginout }}>
                { this.props.children }
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;