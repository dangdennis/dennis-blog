import React from 'react'
import './layout.css'
import Nav from './Nav'

import { rhythm } from '../utils/typography'
import ThemeContext from '../context/themeContext'

class Template extends React.Component {
  toggleTheme = () => {
    this.setState({
      ...this.state,
      theme: this.state.theme === 'default' ? 'pirate' : 'default',
    })
  }

  state = {
    theme: 'default',
    toggleTheme: this.toggleTheme,
  }

  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state}>
          <Nav {...this.props} />
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            {children}
          </div>
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

export default Template
