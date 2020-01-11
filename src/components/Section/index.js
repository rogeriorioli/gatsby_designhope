import React from 'react';

import {Container , Row , Col, Img } from '@bootstrap-styled/v4'

import * as S from './styles';
import Button from '../Button';

export default function Section({background , image ,  title , text }) {
  return (
    <S.sectionContainer className={background} >
        <Container>
            <Row className='center'>
                <Col lg={6}>
                    {background === 'white' ? <Img fluid src={image} alt={title}/> : <><h2>{title}</h2><p>{text}</p> <Button classRight="float-lg-right"/></> }
                </Col>
                <Col lg={6}>
                    {background === 'white' ?  <><h2>{title}</h2><p>{text}</p> <Button classRight="float-lg-right" /> </> : <Img fluid src={image} alt={title}/>  }
                </Col>
            </Row>
        </Container>
    </S.sectionContainer>
  );
}
