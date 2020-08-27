import styled,{keyframes} from 'styled-components';

export const Upper = styled.div`
        position: fixed;
        right:0;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        width: 200px; 
        height:50px;
        z-index:10001;
        div{
            display:flex;
            a{
                color: inherit;
                text-decoration: none;
                margin-left:10px;
                margin-right:10px;
            }
        }
`;

export const StyledMenuButton = styled.button`
        width: 50px; 
        height: 50px;
        border:none;
        background-color:rgba(0,0,0,0);
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Feather-core-grid.svg/1024px-Feather-core-grid.svg.png);
        background-size:cover;
        `;

export const StyledMenuContents = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        position: fixed;
        width: 100vw;
        height: 100vh;
        visibility: hidden;
        background-color:#fff;
        z-index:10000;
        ul{
            text-align:center;
            font-size:3em;
            color:#ed0043;
            cursor:pointer;
            svg{
                width:100px;
                height:auto;
                fill:#ed0043;
            }
        }   
`;

export const StyledMenuVeil = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    overflow: hidden;
    z-index:100;
    svg { position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; }
     
`;