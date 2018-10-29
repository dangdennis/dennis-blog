import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

import { rhythm, scale } from '../utils/typography'
import Footer from './Footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <React.Fragment>
        <nav
          className="nav-list"
          style={{
            marginBottom: rhythm(2),
          }}
        >
          {location.pathname !== rootPath && (
            <Link className="nav-link" to="/">
              Home
            </Link>
          )}
          <a
            className="nav-link"
            href="https://twitter.com/dangitdennis"
            target="_blank"
          >
            Twitter
          </a>
          <a
            className="nav-link"
            href="https://github.com/dangdennis"
            target="_blank"
          >
            GitHub
          </a>
          <Link className="nav-link blog" to="/blog">
            Blog
          </Link>
        </nav>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            // position: 'relative',
          }}
        >
          {children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Template
