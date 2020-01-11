import React from 'react';

import * as S from './styles';

import { Container , Col , Row, Img } from '@bootstrap-styled/v4';

import Image from '../../images/building_website.svg'
import HeroCarousel from '../HeroCarousel';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  return (
    <S.HeroContainer>
        <Container > 
            <Row className="center">
                <Col lg={6}>
                <HeroCarousel/>
                </Col>

                <Col lg={6}>
                    <Img fluid src={Image} />
                </Col>            
            </Row>
        </Container>
    </S.HeroContainer>
  );
}
