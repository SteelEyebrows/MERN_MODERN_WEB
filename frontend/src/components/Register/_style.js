import styled,{keyframes} from 'styled-components';

export const StyledRegister = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content: center;
align-items: center;
div{
    
    width:50vw;
    height:auto;
    h2{
        color:#ed0043;
        font-size:3rem;
        margin-bottom:2rem;
    }
    input{
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }
    button{
        background-color: #ed0043;
        color: white;
        padding: 16px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
}
`;
