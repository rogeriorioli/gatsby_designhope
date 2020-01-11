import styled from 'styled-components';

export const ClientesContainer = styled.section`

        img {
            margin: auto;
            display : block;
            width: 50%;
            filter: grayscale(1);
            opacity: 0.6;
            &:hover {
                filter : grayscale(0)
            }
        }
        .row {
            align-items : center;
        }
  
`;
