import styled,{keyframes} from 'styled-components';

export const Upper = styled.div`
        position: fixed;
        right:0;
        display:flex;
        align-items:center;
        width: 200px; 
        height:50px;
        z-index:10001;
        a{
            margin-left:10px;
            margin-right:10px;
            letter-spacing:2px;
            color:#fff;
        }
`;

export const StyledMenuButton = styled.button`
        width: 50px; 
        height: 50px;
        border:none;
        background-color:rgba(0,0,0,0);
        background-image: url(https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15211315791553239378-512.png);
        background-size:cover;
`;

export const StyledMenuContents = styled.button`
        position: fixed;
        width: 100vw;
        height: 100vh;
        visibility: hidden;
        background-color:#fff;
        z-index:10000;
`;

export const StyledMenuVeil = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    z-index:100;
    
    .smile{
        position: absolute;
        left:50%;
        top: 50%;
        transform: translateY(-50%) translateX(-2%);
        width: 2500vw; 
        height: 100%;
        background: url('https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/whiteink.png')  no-repeat 0 0;
        background-size: 2500vw 100%;
    }
`;