import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

import ThemeContext from '../context/themeContext'

// Default theme icons
import LaptopIcon from '../assets/laptop.svg'
import FlaskIcon from '../assets/flask.svg'
import ProjectIcon from '../assets/project.svg'
import DiagramIcon from '../assets/diagram.svg'
import BinocularIcon from '../assets/binoculars.svg'

// Pirate icons
import OctopusIcon from '../assets/pirate/animal-octopus-pirate-seacreature-set.svg'
import CannonIcon from '../assets/pirate/canon-pirate-set-weapon.svg'
import WheelIcon from '../assets/pirate/nautica-pirate-sail-sailor-set-ship.svg'
import DoubleSwordIcon from '../assets/pirate/doublesword-pirate-piratesword-set-sword-weapon.svg'
import BottleLetterIcon from '../assets/pirate/bottle-bottletter-letter-pirate-sea-set.svg'

export default function About() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <section aria-label="About" className="about">
          <ul
            className="list"
            style={{
              marginLeft: rhythm(0),
            }}
          >
            <li className="list-item">
              <div className="icon">
                {theme === 'default' ? <LaptopIcon /> : <WheelIcon />}
              </div>
              <div>
                <h3 style={H3Style}>Writings and Blog </h3>
                <p>
                  Check out my <Link to="/blog">blog!</Link>
                </p>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                {theme === 'default' ? <FlaskIcon /> : <OctopusIcon />}
              </div>
              <div>
                <h3 style={H3Style}>Trending Interests</h3>
                <p style={{ marginBottom: rhythm(0) }}>
                  Rust, Flutter, Go, blockchain, serverless.
                </p>
                <p>
                  I used to consider myself a hip-hop dancer. But now I'm just a
                  dancer and lover of the beats.
                </p>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                {theme === 'default' ? <DiagramIcon /> : <DoubleSwordIcon />}
              </div>
              <div>
                <h3 style={H3Style}>Work Experience</h3>
                <ul>
                  <li>Kelley Blue Book</li>
                  <li>Experian</li>
                  <li>Q2 Solutions</li>
                </ul>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                {theme === 'default' ? <ProjectIcon /> : <CannonIcon />}
              </div>
              <div>
                <h3 style={H3Style}>Tech Stack</h3>
                <p>
                  Professional: Javascript, AWS, NodeJS, .NET, React, GraphQL,
                  Typescript, CSS Flexbox & Grid, AEM, jQuery
                </p>
                <p>Familiar: Python, C, C++, Java</p>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                {theme === 'default' ? <BinocularIcon /> : <BottleLetterIcon />}
              </div>
              <div>
                <h3 style={H3Style}>Contact</h3>
                <p>
                  Find me on{' '}
                  <a href="https://twitter.com/dangitdennis" target="_blank">
                    Twitter
                  </a>{' '}
                  or email me <a href="mailto:dang.dennis9@gmail.com">here</a>.
                </p>
              </div>
            </li>
          </ul>
        </section>
      )}
    </ThemeContext.Consumer>
  )
}

const H3Style = { marginBottom: '0.5rem' }
