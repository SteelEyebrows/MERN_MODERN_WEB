import styled,{keyframes} from 'styled-components';

export const doubleExposureBack = keyframes`
    0%   { background-position:0% 100%; }
    50%   { background-position:100% 100%; }
    100%   { background-position:0% 100%; }
`;

export const WaveTop = styled.div`
    position:relative;
    margin-top:-50px;
    z-index:100;
`;


export const StyledSecond = styled.section`
width:100vw;
height:100vh;

.external {
    position: relative;
    overflow: hidden;
    min-height: 800px;
  }
  
  .hero-area {
    width: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .textarea {
    color:#2e293c;
    margin-top: -40px;
    text-align: right;
    width: 100%;
    position: absolute;
    button {
      float: right;
    }
    .staggerP {
      padding-top: 40px;
      max-width: 300px;
      right: -10px;
      opacity: 0;
      position: absolute;
      p {
        font-weight: 300;
        display: block;
        text-align: left;
        position: relative;
        line-height: 1.4em;
      }
    }
  }
  
  h1 {
    font-size: 50px;
  }
  
  g path {
    mix-blend-mode: screen;
  }
  
  
  
  #g1, #g2, #g3, #g4 {
    visibility: hidden;
    path {
      stroke-linecap: round;
      stroke-width: 9;
    }
  }
  
  
  //button
  .button {
      display: block;
      padding: 10px 30px;
      border: none;
    width: 170px;
      background: #2e293c;
      color: #fff;
      vertical-align: middle;
      position: relative;
      z-index: 1;
    border: 3px solid white;
    font-family: 'Poppins', sans-serif;
      -webkit-backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
    margin-top: -15px;
    overflow: hidden;
      -webkit-transition: border-color 0.3s, color 0.3s;
      transition: border-color 0.3s, color 0.3s;
      -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }
  .button:focus {
      outline: none;
  }
  .button > span {
      vertical-align: top;
    svg {
      vertical-align: top;
    }
  }
  .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: #37474f;
      z-index: -1;
      -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
      transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
      transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }
  .button:hover {
      color: black;
      border-color: #ed0043;
    cursor: pointer;
  }
  .button:hover::before {
      opacity: 1;
      background-color: #ed0043;
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
      -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }
  
  @media screen and (max-width:600px) {
    h1 {
      font-size: 32px;
      margin-top: 30px;
    }
    button, p {
      font-size: 14px;
    }
    .iconBrand {
      width: 50px;
    }
    .search {
      top: 20px;
      right: 20px;
      opacity: 0.3;
      .searchtext {
        display: none;
      }
    }
    .bookmark {
      left: 20px;
    }
  }
  
  .share, .home {
    display: none;
    opacity: 0;
  }
`;
