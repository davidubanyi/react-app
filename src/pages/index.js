import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="heroGroup">
        <h1>Learn to design and code react apps</h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
