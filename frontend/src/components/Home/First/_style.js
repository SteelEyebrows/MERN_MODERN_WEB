import styled,{css,keyframes} from 'styled-components';


export const StyledFirst = styled.section`
    width: 100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    .bgImage {
        width: 100%;
        height:100vh;
        position: absolute;
        background-image: url(https://images.unsplash.com/photo-1511313424799-ad117d562fa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80);
        background-size: cover;
        background-position: top;
        -webkit-filter: grayscale(70%); /* Safari 6.0 - 9.0 */
        filter: grayscale(70%);
        z-index: -1;
      }
      
      .blobCont {
        position: absolute;
        width: 100vw;
        height: 100vh;
      }

    .airplane{
        position:absolute;
        text-align:center;
        width:300px;
        height:auto;
        visibility: visible;
        font-family: 'Plaster';
        font-size:5em;
        color:#fff;
        z-index:2;
        img{
          width:100%;
          height:auto;
        }
    }                   

`;

// export const StyledFirst = styled.section`
//     width: 100%;
//     height:100vh;
    // display:flex;
    // justify-content: center;
    // align-items: center;
//     background: url("https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/cloud.jpg") no-repeat top center fixed;
//     background-size: cover;
//     z-index:1;
//         .scrollDown{
//             position:absolute;
//             margin-top:500px;
//             width:100%;
//             height:100px;
//             border:none;
//             border-radius:100%;
//             img{
//                 width:100px;
//                 height:100px;
//             }
//         }
        // .maintitle{
        //     font-size:7em;
        //     color:#fff;
        // }
        // .airplane{
        //     position:fixed;
        //     visibility: visible;
        //     width: 300px;
        //     height:300px;
        //     background-size: 200px;
        //     background-image: url("https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/airplane.png");
        //     background-repeat:no-repeat;
        //     z-index:2;
        // }
// `;
