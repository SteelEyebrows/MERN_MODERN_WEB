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
                align="center" 
                onMouseMove={handleMouseMove}
            >   
                
                <h1 className="maintitle">Travel Yourself</h1>
                <div 
                className="airplane" 
                ref={airplainRef} 
                />
                <div className="scrollDown" align="center" onClick={scrollTo}>
                    <img src={"https://static.wixstatic.com/media/f391ab_6ce8575e23d848d8bc3a02b601cdc060~mv2.gif"} alt="scroll down"/>
                </div>
          </StyledFirst>
        </>

	);
}

export default First;