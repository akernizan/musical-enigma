import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFound__wrapper">
      <h1 className="notFound__title">NOT FOUND</h1>
      <p className="notFound__text">I don&#39;t know what you where looking for, but it isn&#39;t here.</p>
    </div>
  </Layout>
)

export default NotFoundPage
