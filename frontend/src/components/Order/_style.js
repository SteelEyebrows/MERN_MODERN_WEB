import styled,{keyframes} from 'styled-components';

export const StyledOrder = styled.div`
width:100vw;
height:100vh;
background-color: #ed0043;
display: flex;
justify-content: center;
align-items:center;
  div{
    max-width: 385px;
    .top {
      display: flex;
      align-items: center;
      flex-direction: column;
      
      .printer {
        width: 90%;
        height: 20px;
        border: 5px solid #fff;
        border-radius: 10px;
        box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2);
      }
    }

    .receipts-wrapper {
      overflow: hidden;
      margin-top: -10px;
      padding-bottom: 10px;
    }

    .receipts {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      transform: translateY(-510px);


      .receipt {
        padding: 25px 30px;
        text-align: left;
        min-height: 200px;
        width: 88%;
        background-color: #fff;
        border-radius: 10px 10px 20px 20px;
        box-shadow: 1px 3px 8px 3px rgba(0, 0, 0, 0.2);
        
        .upper{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .logo {
            width: 50px;
            fill:#ed0043;
          }
        }

        .route {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 30px 0;

          .plane-icon {
            width: 30px;
            height: 30px;
            transform: rotate(90deg);
          }
          h2 {
            font-weight: 300;
            font-size: 2.2em;
            margin: 0;
          }
        }

        .details {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .item {
            display: flex;
            flex-direction: column;
            width: 100%;

            span {
              font-size: .8em;
              color: rgba(28, 28, 28, .7);
              font-weight: 500;
            }
            h3 {
              margin-top: 10px;
              margin-bottom: 25px;
            }
          }
        }

        &.qr-code {
          height: 110px;
          min-height: unset;
          position: relative;
          border-radius: 20px 20px 10px 10px;
          display: flex;
          align-items: center;

          //TODO: replace with svg
          &::before {
            content: '';
            background: linear-gradient(to right, #fff 50%, #3f32e5 50%);
            background-size: 22px 4px, 100% 4px;
            height: 4px;
            width: 90%;
            display: block;
            left: 0;
            right: 0;
            top: -1px;
            position: absolute;
            margin: auto;
          }

          .qr {
            width: 70px;
            height: 70px;
          }
          
          .description {
            margin-left: 20px;

            h2 {
              margin: 0 0 5px 0;
              font-weight: 500;
            }
            p {
              margin: 0;
              font-weight: 400;
            }
          }
        }
      }
    }
}
`;
