import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <React.Fragment>
    <h1>You hit a nonexistent page. Oops. </h1>
    <h3>
      Click to go <Link to="/">back</Link>
    </h3>
  </React.Fragment>
)

export default NotFoundPage
