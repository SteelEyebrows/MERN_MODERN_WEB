import React, { useState,useRef,useEffect } from 'react';
import { StyledSecond,WaveTop } from './_style';

import gsap, { Sine } from 'gsap';
const Second = ({
    secondPageRef,
    
    enterCircle,
    leaveCircle
}) =>{
 
	return (
        <>
         {/* <WaveTop>
            <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
                
                <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#fff" />
            </svg>
        </WaveTop> */}
        <StyledSecond id="slide--2" ref={secondPageRef}>
            {/* <svg width="100%" height="100%">
              <text x="50%" y="60%"  text-anchor="middle" >
                Gracias
              </text>
            </svg> */}
            
                <div className="col">
                    <div className='doubleExposure'>
                        <img className='backBag' src='https://www.starstyle.ph/wp-content/uploads/2014/07/c65e59eb498fdd61_holly-golightly-and-tiffany.jpg'/>
                    </div>
                    <div  className='nomalImage' />
                    <p className="quote">
                    Life is the art of drawing sufficient conclusions <br/>
                    from insufficient premises.
                    </p>   
                </div>
                <div className="col">
                    <svg 
                        className="path1"
                        width="100%" height="100%"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 150 99"
                    >
                        <defs>
                            <path transform="scale(1.5)"  id="master" d="M 15 33 L 72 33 C 99 29 105 16 105 1"  />
                            <path transform="scale(1.5)"  id="master2" d="M 16 54 L 72 54 C 108 57 101 77 98 102"  />
                        </defs>

                        <text id="mainText" fill="#2e293c" >
                            <textPath 
                                id="masterTextPath" 
                                xlinkHref="#master" 
                                textLength="90" 
                                startOffset="100%"
                            >
                                Super
                            </textPath>
                            <textPath 
                                id="masterTextPath" 
                                xlinkHref="#master2" 
                                textLength="90" 
                                startOffset="100%"
                            >
                                Trip
                            </textPath>
                        </text>
                    </svg>
                </div>
            

        </StyledSecond>
        
            </>
	);
}

export default Second;