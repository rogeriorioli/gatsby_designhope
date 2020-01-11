import styled from 'styled-components';

export const sectionContainer = styled.div`
    padding : 40px  0; 
    &.grey {
        background : #fafafa;
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
     
    }

`;
