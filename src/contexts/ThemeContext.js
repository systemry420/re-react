import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDark: true,
        dark: {
            text: '#eee', background: '#333'
        },
        light: {
            text: '#333', background: '#eee'
        }
    };

    toggleTheme = () => {
        this.setState({isDark: !this.state.isDark})
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
                { this.props.children }
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;