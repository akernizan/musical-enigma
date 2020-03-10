import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="resume__wrapper">
      <h1>Resume</h1>

      <h3>Technologies</h3>
      <p>JavaScript, jQuery, HTML5, CSS3, Sass, Git, REST/SOAP APIs, Ajax, SQL, Email Service Provider API’s, PHP, NPM, Yarn, Reactjs, Agile Methodologies, Gatsbyjs, Contentful, Selenium, Cypress, Jira, TDD, Github, Netlify</p>

      <h3>Experience</h3>
      <p className="resume__job-title">Fullstack Developer, Buffy, NY, NY – Nov 2019 – Feb 2020</p>
      <ul>
        <li>Helped maintain Shopify site using Liquid, jQuery, and yarn.</li>
        <li>Helped refactor and remove redundant code.</li>
        <li>Collaborated with Product and Design teams to replicate design updates.</li>
        <li>Helped transition Shopify front-end to reactjs via Gatsbyjs and contentful.</li>
      </ul>
      <p className="resume__job-title">Software Engineer, BounceX, NY,NY – Nov 2016 – Nov 2019</p>
      <ul>
        <li>Wrote documentation to streamline the email service provider integration process and conducted intra-departmental presentation on proper debugging process of these campaigns/APIs.<br/>
        Which lead to faster turn around and better communication between engineering and accounts.</li>
        <li>Provided training to new hires on how to navigate the BounceX platform via peer programing.</li>
        <li>Built custom client campaign integrations using JavaScript, jQuery and PHP.</li>
        <li>Tested and built new features and products for BounceX clients.</li>
      </ul>
      <p className="resume__job-title">	Front End Developer, Sesame Workshop,NY,NY – Aug 2015 – Oct 2016</p>
      <ul>
        <li>Coded custom HTML/CSS/JavaScript English learning games for preK children in China and Japan using our custom content management system.</li>
        <li>Worked directly with projects managers, animators, and writers to discuss code limitations and alternatives to finish projects by given deadlines.</li>
        <li>Built "Special Projects Department" portfolio website to showcase the .department's skill set to the rest of the company using jQuery, AngularJs, uiBootstrap.</li>
      </ul>

      <h3>Education</h3>
      <ul>
        <li>University of Kansas – BA Biology 2011</li>
        <li>General Assembly - Web Development Immersive, 2015</li>
      </ul>
    </div>
   </Layout>
)

export default Resume
