import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

import LaptopIcon from '../assets/laptop.svg'
import FlaskIcon from '../assets/flask.svg'
import ProjectIcon from '../assets/project.svg'
import DiagramIcon from '../assets/diagram.svg'
import BinocularIcon from '../assets/binoculars.svg'

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

        <Particles
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            zIndex: -9999,
          }}
          height="340px"
          params={{
            particles: {
              color: {
                value: '#000000',
              },
              size: {
                value: 1.75,
              },
            },
          }}
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
              <div className="icon">
                <FlaskIcon />
              </div>
              <div>
                <h3>Trending Interests</h3>
                <p style={{ marginBottom: rhythm(0) }}>
                  Rust, blockchain, Python, and ReasonML.
                </p>
                <p>I like music and dance as well.</p>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <DiagramIcon />
              </div>
              <div>
                <h3>Work Experience</h3>
                <ul>
                  <li>Kelley Blue Book</li>
                  <li>Experian</li>
                  <li>Q2 Solutions</li>
                </ul>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <LaptopIcon />
              </div>
              <div>
                <h3>Writings and Blog </h3>
                <p>
                  Check out my <Link to="/blog">blog!</Link> [WIP]
                </p>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <ProjectIcon />
              </div>
              <div>
                <h3>Tech Stack</h3>
                <p>
                  Professional: Javascript, AWS, NodeJS, .NET, React, GraphQL,
                  Typescript, CSS Flexbox & Grid, AEM, jQuery
                </p>
                <p>Familiar: Python, C, C++, Java, Rust</p>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <BinocularIcon />
              </div>
              <div>
                <h3>Contact</h3>
                <p>
                  Find me on Twitter or email me{' '}
                  <a href="mailto:dang.dennis@gmail.com">here</a>.
                </p>
              </div>
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
