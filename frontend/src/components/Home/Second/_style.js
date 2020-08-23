import styled,{keyframes} from 'styled-components';

export const doubleExposureBack = keyframes`
    0%   { background-position:0% 100%; }
    50%   { background-position:100% 100%; }
    100%   { background-position:0% 100%; }
`;

export const WaveTop = styled.div`
    position:relative;
   
    z-index:100;
`;


export const StyledSecond = styled.section`
    display: flex;
    align-items: stretch;
    justify-contents:center;
    position:relative;
    z-index:3;
    background:#fff;
    width:100vw;
    height:100vh;
    z-index:100;
    #masterTextPath{
        font-family: 'Getsy';
        font-size:2rem;
    }
    .col{
        flex-basis: 50%;
    }
    .quote{
        position:absolute;
        bottom:50px;
        left:100px;
        font-size:3rem;
    }
    .doubleExposure{
        margin-top:50px;
        animation: ${doubleExposureBack} 200s infinite;
        background: url(http://riccardotartaglia.it/img/blend/back.jpg);
        background-color:#cdc8c4; 
        padding:0; 
        width:50vw; 
        height:0;
        transform-origin:left;

        .backBag{
            mix-blend-mode: lighten; 
            position: absolute; 
            width:50%; 
            height:auto;

        }
    }
    .nomalImage{
        position:absolute;
        top:40%;
        width:0; 
        height:30vh;
        background: url(https://www.washingtonpost.com/resizer/iyfvu4tOamPqwwxlhZNctr-g4ag=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AHEH5UXDD4I6VDOS2B4BFPYA64.jpg);
        transform-origin:left;
        img{
            width:auto; 
            height:30vh;
        }
    }
`;
