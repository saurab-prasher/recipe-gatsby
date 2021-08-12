import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: false }
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <div>
      <h1>Simple Image Gallery</h1>

      {nodes.map((image, index) => {
        const pathToImage = getImage(image)
        const { name } = image

        return (
          <article key={index}>
            <GatsbyImage image={pathToImage} alt={name} />
          </article>
        )
      })}
    </div>
  )
}

export default Gallery
