import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm a baby coloring book poke taxidermy</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              illo sapiente asperiores soluta nobis error officiis odit? Magni,
              vel cum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa id
              asperiores, perferendis optio officia dolorum dolore est? Fugiat
              magni tempora soluta aspernatur, possimus voluptates incidunt.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assests/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
      <h1>about page</h1>
    </Layout>
  )
}

export default About
