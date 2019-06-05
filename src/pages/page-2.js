import React from "react"
import { Link } from "gatsby"
import kitty from "../images/cat2.jpeg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Meow from the second page</h1>
    <p>Meow! page 2</p>
    <img src={kitty} alt="piano cat"/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
