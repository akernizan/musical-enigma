import React from "react"
import SEO from "../components/seo"

import "../styles/layout.scss"

const Links = () => (

  <>
    <SEO title="Links" />
    <div className="links__container">
      <h1>Akosua Kernizan</h1>
      <h2>Web Developer</h2>
      <div className="link__button">
        <a href="https://www.linkedin.com/in/akosuakernizan/" target="_blank" rel="noopener noreferrer">Linkedin</a>
      </div>
      <div className="link__button">
        <a href="https://www.akosuakernizan.com" target="_blank" rel="noopener noreferrer">Personal Website</a>
      </div>
      <div className="link__button">
        <a href="https://tech-blog.netlify.com/" target="_blank" rel="noopener noreferrer">Tech Blog</a>
      </div>
    </div>


  </>
)

export default Links
