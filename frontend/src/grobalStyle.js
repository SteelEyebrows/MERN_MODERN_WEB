import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'Braga'; src: url('Braga') format('ttf'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'Getsy'; src: url('Getsy') format('ttf'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'Estillon'; src: url('Estillon') format('ttf'); font-weight: normal; font-style: normal; }

  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }
  a,h2{
    font-family: 'Getsy';
    color:#2e293c;  
    }
  b,h1{
    font-family: 'Braga';
  }
  p,h3,h4,h5{
    font-family: 'Estillon';
  }
  ul {
    list-style-type: none;
}
`;