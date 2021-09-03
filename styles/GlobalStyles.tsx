import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-11: #111111;
    --color-33: #333333;
    --color-55: #555555;
    --color-77: #777777;
    --color-99: #999999;
    --color-aa: #aaaaaa;
    --color-cc: #cccccc;
    --color-dd: #dddddd;
    --color-ea: #eaeaea;
    --color-e5: #e5e5e5;
    --color-f0: #f0f0f0;
    --color-f6: #f6f6f6;
    --color-white: #ffffff;
    --color-green:#26BE7E ;
    --color-green-10: rgba(38, 190, 126, 0.1); 
    --color-red: #FF3535;
    --color-red-10: rgba(255, 53, 53, 0.1);
    --color-blue: #353CDD;
    --color-blue-10: rgba(53, 60, 221, 0.1);
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: var(--color-e5); 
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }

  ul,li {
    padding:0;
    list-style: none;
  }

  
 `;

export default GlobalStyle;
