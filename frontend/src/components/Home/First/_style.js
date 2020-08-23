import styled,{keyframes} from 'styled-components';

export const StyledFirst = styled.section`
    width: 100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background: url("https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/cloud.jpg") no-repeat top center fixed;
    background-size: cover;
    z-index:1;
        .scrollDown{
            position:absolute;
            margin-top:500px;
            width:100%;
            height:100px;
            border:none;
            border-radius:100%;
            img{
                width:100px;
                height:100px;
            }
        }
        .maintitle{
            font-size:7em;
            color:#fff;
        }
        .airplane{
            position:fixed;
            visibility: visible;
            width: 300px;
            height:300px;
            background-size: 200px;
            background-image: url("https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/airplane.png");
            background-repeat:no-repeat;
            z-index:2;
        }
`;
