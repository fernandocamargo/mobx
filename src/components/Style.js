import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /*
  YUI 3.18.1 (build f7e7bcb)
  Copyright 2014 Yahoo! Inc. All rights reserved.
  Licensed under the BSD License.
  http://yuilibrary.com/license/
  */
  html{color:#000;background:#FFF}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}

  html {
    background-color: #F3F5F7;
    overflow-y: scroll;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    min-height: calc(100vh - 10rem);
    padding: 5rem;
  }

  hr {
    display: none;
  }

  h1 {
    display: inline-block;
    font-family: 'Vollkorn', serif;
    font-size: 3rem;
    position: relative;

    &:after {
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
      display: block;
      height: 1px;
      left: calc(100% + 1rem);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: calc(((100vw - 11rem) - 100%) - 17px);
    }
  }
`;
