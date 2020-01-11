

import React from 'react';
import services from './services'
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows : false,
    autoplay : true,
  };

const HeroCarousel = () => {

    return(
          <Slider {...settings}>
            {services.map(item => {
                return(
                    <div className="item" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                    </div>  
                )   
            })}
          </Slider>
    );
    }
export default HeroCarousel;
