import React, { useState,useRef,useEffect } from 'react';
import { StyledFirst } from './_style';


const First = ({
    scrollTo,
    firstPageOutRef,
    handleMouseMove,
    airplainRef,
}) =>{

	return (
        <>
            <StyledFirst 
                id="slide--1"
                ref={firstPageOutRef}  
                onMouseMove={handleMouseMove}
                align="center"
            >   
                
                <div className="bgImage" />
                <div 
                    className="airplane" 
                    ref={airplainRef} 
                >
                    <img src={"https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/mainlogo.png"} />
                </div>
                <svg className="blobCont">
                        <image 
                            xlinkHref="https://images.unsplash.com/photo-1511313424799-ad117d562fa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
                            mask="url(#mask)" 
                            width="100%" height="100%" 
                            preserveAspectRatio="xMidYMid slice" 
                        />
                        <defs>
                            <filter id="gooey" height="130%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                            </filter>
                        </defs>
                            <mask id="mask" x="0" y="0">
                                <g filter="url(#gooey)">
                                    <circle className="blob" cx="10%" cy="10%" r="100" fill="white" stroke="white"/>
                                    <circle className="blob" cx="50%" cy="10%" r="60" fill="white" stroke="white"/>
                                    <circle className="blob" cx="17%" cy="15%" r="90" fill="white" stroke="white"/>
                                    <circle className="blob" cx="90%" cy="20%" r="200" fill="white" stroke="white"/>
                                    <circle className="blob" cx="30%" cy="25%" r="50" fill="white" stroke="white"/>
                                    <circle className="blob" cx="50%" cy="60%" r="100" fill="white" stroke="white"/>
                                    <circle className="blob" cx="70%" cy="90%" r="30" fill="white" stroke="white"/>
                                    <circle className="blob" cx="90%" cy="60%" r="90" fill="white" stroke="white"/>
                                    <circle className="blob" cx="30%" cy="90%" r="100" fill="white" stroke="white"/>
                                    <circle className="blob" cx="10%" cy="10%" r="100" fill="white" stroke="white"/>
                                    <circle className="blob" cx="50%" cy="10%" r="20" fill="white" stroke="white"/>
                                    <circle className="blob" cx="17%" cy="15%" r="90" fill="white" stroke="white"/>
                                    <circle className="blob" cx="40%" cy="20%" r="200" fill="white" stroke="white"/>
                                    <circle className="blob" cx="30%" cy="25%" r="70" fill="white" stroke="white"/>
                                    <circle className="blob" cx="80%" cy="60%" r="100" fill="white" stroke="white"/>
                                    <circle className="blob" cx="17%" cy="10%" r="120" fill="white" stroke="white"/>
                                    <circle className="blob" cx="40%" cy="60%" r="90" fill="white" stroke="white"/>
                                    <circle className="blob" cx="10%" cy="50%" r="150" fill="white" stroke="white"/>
                                </g>
                            </mask>
                    </svg>
                    
            </StyledFirst>
        </>

	);
}

export default First;


// <StyledFirst 
//                 id="slide--1"
//                 ref={firstPageOutRef}  
//                 align="center" 
//                 onMouseMove={handleMouseMove}
//             >   
                // <h1 className="maintitle">Travel Yourself</h1>
                // <div 
                //     className="airplane" 
                //     ref={airplainRef} 
                // />
                // <div className="scrollDown" align="center" onClick={scrollTo}>
                //     <img src={"https://static.wixstatic.com/media/f391ab_6ce8575e23d848d8bc3a02b601cdc060~mv2.gif"} alt="scroll down"/>
                // </div>
//             </StyledFirst>