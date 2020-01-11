import styled from 'styled-components';

export const HeaderContainer = styled.header` 
    padding : 20px 0;
    display: flex;
    align-items: center;
    position : relative;
    a {
        color : #138296;
        font-weight: 600;
        font-size : 2rem;
        text-decoration : none;
    }
    .button {
        display : none;
        float : right;
        background : transparent;
        border : none;
        &:focus{
            outline: none;
        }
    }
    @media screen and (max-width: 996px) {
        .show-sm {
            display : block;
        }
    } 
    .menu {
        list-style: none;
        text-align : right;
        @media screen and (max-width: 996px) {
        display : ${props => props.show};
            position : absolute;
            background: #fafafa;
            width : 50%;
            right: -500px;
            top: 60px;
            height : 100vh;
            z-index: 99999;
            transition: all 0.5s;
        }
        &.open {
            right: 20px;
            transition: all 0.5s;
        }
        li {
            display: inline;
            margin : 0 10px;
            @media screen and (max-width: 996px) {
                display : block;
                text-align: center;
                padding : 10px 0;
                margin : 0;
            }
            &:last-child {
                margin-right: 0;
            }
            a {
                font-weight: 400;
                color: #7E7E7E;
                font-size: 1rem;
                @media screen and (max-width: 996px) {
                    font-size : 1.5rem;
            }
            } 
        }
    }    
`;


