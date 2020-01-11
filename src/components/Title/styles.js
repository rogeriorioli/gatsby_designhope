import styled from 'styled-components';

export const TitleSection = styled.h2`
    position: relative;
    text-align : center;
    line-height: 4rem;
    margin-bottom : 40px;
    &:before {
        content : '';
        height : 3px;
        background-color : rgba(19, 130, 150, 0.3);
        position : absolute;
        bottom : 0;
        width : 10%;
        left: 0;
        right : 0;
        margin : auto;

    }
`;
