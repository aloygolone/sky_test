import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}


ul li {
  list-style: none;
}
html,

body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  padding-left: calc((100% - 556px) / 2);
  padding-right: calc((100% - 556px) / 2);
}
`;
