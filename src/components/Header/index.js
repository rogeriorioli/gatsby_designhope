import { Link } from "gatsby"
import React from "react"
import * as S from './styles'
import {Col, Row , Container} from '@bootstrap-styled/v4'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = ({ siteTitle }) => (
  <S.HeaderContainer> 
    <Container>
      <Row>
        <Col lg={2}>
            <Link to="/">{siteTitle}</Link>
        </Col>
        <Col lg={10}>
          <ul className="menu">
            <li>
            <AnchorLink href='#oque'> o que</AnchorLink>
            </li>
            <li>
            <AnchorLink href='#como'>como</AnchorLink>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </S.HeaderContainer>
)

export default Header
