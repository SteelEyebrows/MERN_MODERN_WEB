import styled from 'styled-components';


export const StyledSlider = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;


.testimonial-container {
  width: 1280px;
  min-width: 1280px;
  height: 600px;
  position: relative;
  .arrows {
    position: absolute;
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    bottom: 0;
    top: 0;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    &.right {
      right: 0;
    }
  }
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    .t-image {
      width: 500px;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after {
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        background: #F24E05;
        left: 140px;
        top: 0;
        border-radius: 100%;
        z-index: -9;
      }
      ul {
        display: flex;
        position: absolute;
        overflow: hidden;
        height: 460px;
        width: 340px;
        box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
        li {
          height: 460px;
          width: 340px;
          img {
            height: 460px;
            width: 340px;
          }
        }
      }
    }
    .t-content {
      width: 500px;
      height: 600px;
      display: flex;
      align-items: center;
      ul {
        position: absolute;
        overflow: hidden;
        width: 500px;
        height: 400px;
        li {
          width: 500px;
          height: 400px;
          color: #2e293c;
          display: flex;
          align-items: center;
          position: absolute;
          opacity: 0;
         
          }
          .content-inner {
            width: auto;
            height:200px;
            .quote {
              font-size:5rem;
              letter-spacing: 0.88px;
              line-height: 40px;
              font-weight: 700;
              margin-bottom: 16px;
            }
            .name {
              margin-top:50px;
              font-size: 2em;
              text-align:right;
              letter-spacing: 0.88px;
              line-height: 28px;
              color:  #a09da6;
            }
            .title {
              font-size: 1em;
              text-align:right;
              vertical-align:bottom;
              letter-spacing: 0.88px;
              line-height: 28px;
              color:  #a09da6;
            }
            
            }
          }
        }
      }
    }
  }
}
`;