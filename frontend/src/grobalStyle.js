import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'Braga'; src: url('Braga') format('ttf'); font-weight: normal; font-style: normal; }
  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  @font-face { font-family: 'Estillon'; src: url('Estillon') format('ttf'); font-weight: normal; font-style: normal; }
  @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }
  h2{
    font-family: 'GmarketSansBold';
    font-size:5rem;
    color:#2e293c;  
    }
  b,h1,li{
    font-family: 'GmarketSansBold';
  }
  p,h3,h4,h5{
    font-family: 'Chosunilbo_myungjo';
  }
  ul {
    list-style-type: none;
}
`;