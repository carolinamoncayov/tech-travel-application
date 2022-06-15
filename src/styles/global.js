import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
     }

    *:focus {
        outline:0;
    }

    html, body: #root{
        height: 100%;
    }

    body {
        background-color: #f6f7fb;
        -webkit-font-smoothing: antialised;
    }

    body, input, button {
        font-family: 'Monstserrat', 'sans-serif';
    }

     a{
     text-decoration: none;
     }

     ul {
        list-style: none;
    }

    button {
     cursor: pointer;
    }
    `;
