import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Section from "../components/Section"
import Title from "../components/Title"
import SectionTech from "../components/SectionTech"
import SectionClients from "../components/SectionClientes"
import code from '../images/code_html.svg'
import landing from '../images/landing_pages_1.svg'
import marketing from '../images/marketing.svg'
import seo from "../images/seo.svg";
import wire from '../images/wireframe.svg'
import design from '../images/designer_3.svg'
import dev from "../images/web_developer.svg";



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <article id="oque">
        <Title title="O que fazemos "/>
      <Section 
      background="white" 
      title="Desenvolvemos com as 
      Melhores ferramentas." 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={code} />
      <Section 
      background="grey" 
      title="Landing pages customizadas  
      E que engajam" 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={landing} />
       <Section 
      background="white" 
      title="Email Marketing
      Informe e converta mais" 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={marketing} />
       <Section 
      background="grey" 
      title="Seja encontrado
      E tenha um site super rápido" 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={seo} />
    </article>

    <article id="como">
        <Title title="Como fazemos "/>
      <Section 
      background="white" 
      title="Analise e prototipos
      Usabilidade e experiência" 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={wire} />
      <Section 
      background="grey" 
      title="Design e estudo de
      Identidade visual" 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={design} />
       <Section 
      background="white" 
      title="Código limpo e 
      Melhores práticas" 
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
      image={dev} />
    </article>

    <article id="usamos">
        <Title title="Tecnologias que Usamos"/>
        <SectionTech />
       
    </article>
      <article id="contato">
          <Title title="Fale Conosco"/>
      </article>
  </Layout>
)

export default IndexPage
