import React, { useState,useRef,useEffect } from 'react';
import {Upper,StyledMenuVeil,StyledMenuButton,StyledMenuContents} from './_style';

const Menu = ({
    veilRef,
    inkRef,
    contentsRef,
    onClickMenu
}) =>{


	return (
        <>
            <Upper>
                <div><a>login</a></div>/
                <div><a>register</a></div>
                <StyledMenuButton onClick={()=>onClickMenu()} />
            </Upper>
            <StyledMenuVeil ref={veilRef}>   
            	<div ref={inkRef} className="smile" />
			</StyledMenuVeil>
            <StyledMenuContents ref={contentsRef}/>
            
        </>

	);
}

export default Menu;