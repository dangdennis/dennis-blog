import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <section aria-label="About" className="about">
          <ul
            className="list"
            style={{
              marginLeft: rhythm(0),
            }}
          >
            <li className="list-item">
              <h3 className="header">Trending Interests</h3>
              <p className="details">Rust, blockchain, Python, and ReasonML</p>
              <p>I like R&B and hip-hop too.</p>
            </li>
            <li className="list-item">
              <h3 className="header">Work Experience</h3>
              <ul>
                <li>Kelley Blue Book</li>
                <li>Experian</li>
                <li>Q2 Solutions</li>
              </ul>
            </li>
            <li className="list-item">
              <h3 className="header">Writings and Blog </h3>
              <p className="details">
                Check out my <Link to="/blog">blog!</Link> [WIP]
              </p>
            </li>
            <li className="list-item">
              <h3 className="header">Tech Stack</h3>
              <p>
                Professional: Javascript, AWS, NodeJS, .NET, React, GraphQL, Typescript, CSS Flexbox &
                Grid, AEM, jQuery
              </p>
              <p>Familiar: Python, C, C++, Java, Rust</p>
            </li>
            <li className="list-item">
              <h3 className="header">Contact</h3>
              <p className="details">
                Find me on Twitter or email me{' '}
                <a href="mailto:dang.dennis@gmail.com">here</a>.
              </p>
            </li>
          </ul>
        </section>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
