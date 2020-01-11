import styled from 'styled-components';

export const HeaderContainer = styled.header` 
    padding : 20px 0;
    display: flex;
    align-items: center;
    a {
        color : #138296;
        font-weight: 600;
        font-size : 2rem;
        text-decoration : none;
    }
    .menu {
        list-style: none;
        text-align : right;
        li {
            display: inline;
            margin : 0 10px;
            &:last-child {
                margin-right: 0;
            }
            a {
                font-weight: 400;
                color: #7E7E7E;
                font-size: 1rem;
            } 
        }
    }    
`;


