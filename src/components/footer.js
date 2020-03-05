import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Footer = () => (
    <footer>
      © Akosua Kernizan {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
)

export default Footer
