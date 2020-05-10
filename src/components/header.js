import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = () => (
  <header>
    <nav>
      <div className="homepage__image">
        <Image />
      </div>
      <div className="homepage__links">
        <Link to="/" activeClassName="active">About</Link>
        <Link to="/resume" activeClassName="active">Resume</Link>
        <Link to="/contact" activeClassName="active">Contact</Link>
        <a href="https://tech-blog.netlify.com/" target="_blank" rel="noopener noreferrer">Blog</a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
