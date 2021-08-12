import React from "react"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const testing = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Testing Page</h1>
        <Gallery />
      </main>
    </Layout>
  )
}

export default testing
