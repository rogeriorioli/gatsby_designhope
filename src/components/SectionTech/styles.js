import styled from 'styled-components';

export const TechContainer = styled.section`    
        margin-bottom : 40px;
       p{
           text-align: center;
           margin-bottom : 40px;
       }
       .icon {
           text-align: center;
           padding : 40px 0;
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
`;
