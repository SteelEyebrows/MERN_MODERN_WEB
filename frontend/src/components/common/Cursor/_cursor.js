import React, { useState,useRef,useEffect } from 'react';
import { StyledCursor } from './_style';

const Cursor = ({
    circleRef,
    circleFollowRef
}) =>{

	return (
        <>
        <StyledCursor>
            <div ref={circleRef} className="circle"></div>
            <div ref={circleFollowRef} className="circle-follow"></div>
        </StyledCursor>
        </>

	);
}

export default Cursor;