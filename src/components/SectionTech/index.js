import React from 'react';
import {Col , Row, Container} from '@bootstrap-styled/v4'
import Slider from "react-slick";
import icons from './tec'
import * as S from './styles';



export default function SectionTech() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows : false,
    autoplay : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <S.TechContainer>
    <Container>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
      
      <Slider {...settings}>
            {icons.map(item => {
              return ( <Col key={item.id}> <div className="icon">{item.icon} </div></Col> )
              } 
            )}
      </Slider>
    </Container>
    </S.TechContainer>
  );
}
