import styled from 'styled-components';

import bg from '../../images/bg-hero.svg'

export const HeroContainer = styled.section`

    background : url(${bg});
    background-repeat : no-repeat;
    background-size : contain;
    background-position-y: -50px;
    padding : 40px 0;
    @media screen and (max-width:468px){
        background-position: bottom;
    }
    h2 {
        width : 80%;
    }
    p{
        margin : 20px 0;
        width : 90%;
    }
    .item {
        &:focus {
            outline : none;
        }
      
    }
    .slick-dots {
            button {
                &:before {
                    color : #138296;
                }
            }
            .slick-active {
                button {
                &:before {
                    color : #138296;
                }
            }
            }
        }
        @media screen and (max-width: 480px){
        .row {
            div {

                &:first-child {
                    order : 2;
                }
                &:last-child {
                    order : 1;
                }
            }
        }

}
`;
