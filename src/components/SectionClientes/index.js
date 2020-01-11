import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as S from "./styles"
import {Col, Container , Row}  from  '@bootstrap-styled/v4'
import Img from "gatsby-image"

const SectionClients = () => (
  <StaticQuery
    query={graphql`
      query parceiros {
        source: allFile(filter: { absolutePath: { regex: "/clientes/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <S.ClientesContainer>
          <Container>
              <Row>
                    {data.source.edges.map(({ node }, i) => (
                    <Col lg={2} xs={6} key={i}>
                        <Img fluid={node.childImageSharp.fluid} />
                    </Col>
                    ))}

              </Row>
          </Container>
      </S.ClientesContainer>
    )}
  />
)
export default SectionClients
