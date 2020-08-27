import styled,{keyframes} from 'styled-components';


export const StyledDrawing =styled.div`
    width:80vw;
    height:80vh;
    overflow:hidden;
    .infoWindow{
        position:absolute;
        display:flex;
        left:10px;
        z-index:50;
        width:500px;
        height:200px;
        border-radius:20px;
        background:#fff;
        padding:20px;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        .thumnail{
            width:30%;
            display:flex;
            align-items:center;
            img{
                width:100px;
                height:100px;
                border-radius: 50%;
            }
        }
        .info{
            width:70%;
            height:100px;
            .name{
                font-family: 'GmarketSansBold';
                font-size:2em;
                height:auto;
            }
            .visinity{
                height:20%;
            }
            button{
                cursor:pointer;
                width:100%;
                height:auto;
                color:white;
                background:#ed0043;
                border:none;
                border-radius: 20px;
                margin:10px;
                padding:10px;
            }
        }
    }

`;
