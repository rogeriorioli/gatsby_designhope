import { Link } from "gatsby"
import React, {useState} from "react"
import * as S from './styles'
import {Col, Row , Container} from '@bootstrap-styled/v4'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MdMenu, MdClose } from "react-icons/md"

const Header = ({ siteTitle }) => {
  const [menu , setMenu] = useState(false);
  
  
  const OpenMenu = () => {
    setMenu(!menu);
  }
 return (
  <S.HeaderContainer> 
    <Container>
      <Row>
        <Col lg={2} md={2} xs={2}>
            <Link to="/">{siteTitle}</Link>
        </Col>
        <Col lg={10} md={10} xs={10}>
          <button onClick={OpenMenu} className="button show-sm">
            {menu != false ?
              <MdClose size={40} color="#138296"/> :
              <MdMenu size={40} color="#138296"/>
          }
          </button>
          <ul className={menu === false ? 'menu' : 'menu open'}>
            <li>
            <AnchorLink href='#oque' onClick={OpenMenu}> o que</AnchorLink>
            </li>
            <li>
            <AnchorLink href='#como' onClick={OpenMenu}>como</AnchorLink>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </S.HeaderContainer>
)
}

export default Header
