import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
    
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
        --background: #f0f2f5;
}

* {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    scroll-behavior: smooth;

	--dark-base: rgba(4, 24, 50, 1);
    --base-color: rgba(52, 104, 167, 0.95);
    --base-color-opacity: rgba(52, 104, 167, 0.25);
    --background: #f7f7f7;
    --projects: rgba(73, 156, 254, 1);
    --projects-end: rgba(156, 200, 252, 0.9);

}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: linear-gradient(230deg, var(--dark-base), var(--base-color));
    border-radius: 10px;
    padding: 5%;
    min-width: 400px;
}

main {
    width: 100%;
	max-width: 1024px;
	margin: 0 auto;
}
    
.container {
    background-color: var(--background);
    max-width: 1080px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 6px 6px 6px var(--dark-base);
    padding: 35px;
}
    
`;
