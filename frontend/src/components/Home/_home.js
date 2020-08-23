import * as React from "react";
import { withRouter } from "react-router-dom";
import {StyledHome} from './_style';
import gsap, { Sine } from 'gsap';
import useStyledCursor from 'lib/hoc/useStyledCursor';
import Cursor from '../common/Cursor';
import First from './First';
import Second from './Second';
import Slider from 'components/Home/Slider';
const Home = ({   
  firstPageOutRef,
  handleMouseMove,
  airplainRef,

  secondPageRef,
}) => {
 const {circleRef,circleFollowRef,moveCircle,enterCircle,leaveCircle} = useStyledCursor();
 const scrollTo = (n) => gsap.to(window, 1, { scrollTo: `#slide--${n}` });

 return (
    <>			 
      <StyledHome onMouseMove={moveCircle}>
          <Cursor 
            circleRef={circleRef}
            circleFollowRef={circleFollowRef}
          />
          <First 
            scrollTo={()=>scrollTo(2)}
            firstPageOutRef={firstPageOutRef}
            handleMouseMove={handleMouseMove}
            airplainRef={airplainRef}
          />
          <Second 
            secondPageRef={secondPageRef}

            enterCircle={enterCircle}
            leaveCircle={leaveCircle}
          />
          <Slider 
            
          />
      </StyledHome>
		</>
    );
  };

export default withRouter(Home);


// svg text {
//   font-family: Lora;
//   letter-spacing: 10px;
//   stroke: #000;
//   font-size: 150px;
//   font-weight: 700;
//   stroke-width: 3;
//   animation: ${textAnimate} 5s infinite alternate;        
// }