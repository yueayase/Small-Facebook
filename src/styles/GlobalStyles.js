// Reference: https://scalablecss.com/styled-components-global-styles/
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        position: relative;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;