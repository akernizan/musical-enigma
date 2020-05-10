import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import "../styles/layout.scss"

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />

    <div className="homepage__wrapper">
      <div className="homepage__info">
        <h1>Hi, I'm Akosua.</h1>
        <p>I am a Web Developer based in NYC.
        I have 4 years of professional experience on the front end.
        Available to solve problems, play with pixels, and expand my mind.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
