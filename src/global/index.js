import "isomorphic-fetch";
import "@babel/polyfill";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {injectGlobal} from "styled-components";

injectGlobal`
    ::selection {
        background: #e2e2e2;
        color: #717171;
    }
    ::-moz-selection {
        background: #e2e2e2;
        color: #717171;
    }
    
    *,
    *:after,
    *:before {
      box-sizing: inherit;
    }
    
    html {
        line-height: 1.15;
        -ms-text-size-adjust: 100%; 
        -webkit-text-size-adjust: 100%; 
        box-sizing: border-box;
        font-size: 62.5%;
        direction: ltr;
    }
    
    
    body {
        color: #606c76;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif;
        font-size: 1.6em;
        font-weight: 300;
        letter-spacing: .01em;
        line-height: 1.6;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
    }
`;