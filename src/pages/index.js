import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'

import Layout from '../components/Layout'
import Bio from '../components/Bio'
import About from '../components/About'
import Footer from '../components/Footer'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

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
        <About />
        <Footer />
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
