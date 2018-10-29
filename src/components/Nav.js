import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

export default function Nav(props) {
    const { location } = props
    const rootPath = `${__PATH_PREFIX__}/`
  return (
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
  )
}
