import React from 'react'
import ThemeContext from '../context/themeContext'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import PirateIcon from '../assets/pirate/man-piracy-pirate-sea-set.svg'
import { rhythm } from '../utils/typography'

const Bio = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginBottom: rhythm(2.5),
              textAlign: 'center',
            }}
          >
            <div aria-label="Click me for a secret" style={{ height: '70px' }}>
              {theme === 'default' ? (
                <img
                  onClick={toggleTheme}
                  src={profilePic}
                  alt={`Dennis Dang`}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    width: rhythm(2.5),
                    height: rhythm(2.5),
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <PirateIcon
                  aria-label="Pirate Face"
                  onClick={toggleTheme}
                  style={{ width: '65px', cursor: 'pointer' }}
                />
              )}
            </div>
            <h1
              style={{
                marginBottom: rhythm(0.2),
                letterSpacing: '-1px',
                fontWeight: '700',
                color: 'hsla(0,0%,0%,0.83)',
              }}
            >
              Dennis Dang
            </h1>
            <h3
              style={{
                marginBottom: rhythm(0.1),
                color: 'hsla(0,0%,0%,0.78)',
              }}
            >
              Software Engineer
            </h3>
            <p style={{ lineHeight: '18px' }}>Core: Javascript</p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Bio
