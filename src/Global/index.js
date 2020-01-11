import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`

        *{
            font-family : 'Nunito';
            margin : 0;
            padding: 0;
            box-sizing : border-box;
        }
        p{
            font-weight : 400;
            color : #7E7E7E;
            font-size: 1rem;
            
        }
        h1, h2, h3 {
            color : #138296;
            font-weight : 600;
            font-size: 2rem;
        }

        .center {
            align-items: center;
        }
   
`