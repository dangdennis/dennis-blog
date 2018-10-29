import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Bio = props => {
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
      <p style={{ lineHeight: '18px' }}>Core: Javascript ecosystem</p>
    </div>
  )
}

export default Bio
