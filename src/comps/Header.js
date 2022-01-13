import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Header extends React.Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <AuthContext.Consumer>
        {(authcontext) => {
          <ThemeContext.Consumer>
            {(context) => {
              const { isLoggedIn, loginout } = authcontext;
              const { isDark, dark, light, toggleTheme } = context;
              const theme = isDark ? dark : light;
                return (
                  <div>
                    <button onClick={loginout}>Login</button>
                    {
                      !isLoggedIn ? null :
                        <div 
                          className="header"
                          style={{ background: theme.background, color: theme.text }}>
                          <h1 style={{ color: "red" }}>
                            {this.props.title}
                          </h1>
                          <button className="btn"
                            onClick={this.props.onShowForm}
                            style={
                              this.props.showForm
                                ? { background: "red" }
                                : { background: "green" }
                            }>
                            {this.props.showForm ? "Close" : "Open"}
                          </button>

                          <button onClick={toggleTheme} className="btn">
                            Toggle Theme
                          </button>
                        </div>
                    }
                  </div>
                )
            }}
          </ThemeContext.Consumer>;
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Header;
