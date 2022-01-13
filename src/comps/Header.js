import React from "react"
import { ThemeContext } from "../contexts/ThemeContext"


class Header extends React.Component {
    // static contextType = ThemeContext;
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                const { isDark, dark, light, toggleTheme } = context;
                const theme = isDark ? dark : light;
                    return (
                        <div className="header" style={{ background: theme.background, color: theme.text }}>
                            <h1 style={{ color: 'red' }}>{this.props.title}</h1>
                            <button 
                                onClick={this.props.onShowForm} 
                                style={
                                    this.props.showForm ? 
                                    {'background': 'red'} : 
                                    {'background': 'green'} 
                                }
                                className="btn">
                                    {this.props.showForm ? 'Close' : 'Open'}
                            </button>

                            <button 
                                onClick={toggleTheme} 
                                className="btn">
                                Toggle Theme
                            </button>
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default Header
