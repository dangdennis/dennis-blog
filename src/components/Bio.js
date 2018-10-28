import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Dennis Dang`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p>
          Written by <strong>Dennis Dang</strong> who lives and breathes dance,
          code, and energy.{' '}
          <a href="https://twitter.com/dangitdennis">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
