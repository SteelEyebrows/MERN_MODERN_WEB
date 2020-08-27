import React, { useState,useRef,useEffect } from 'react';
import {Upper,StyledMenuVeil,StyledMenuButton,StyledMenuContents} from './_style';
import {Link} from 'react-router-dom';

const Menu = ({
    history,
    isAuthenticated,
    postLogOut,
    veilRef,
    contentsRef,
    onClickMenu
}) =>{


	return (
        <>
            <Upper>
                {
                    isAuthenticated?
                    <button onClick={postLogOut}>logout</button>
                    :
                    <div className="unAuthenticated">
                        <Link className="link" to={'/login'}>login</Link>/
                        <Link className="link" to={'/register'}>register</Link>
                    </div>
                }
                <StyledMenuButton onClick={()=>onClickMenu()} />
            </Upper>
            <StyledMenuVeil ref={veilRef}>   
                <svg viewBox="0 0 630 352" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <mask id="m1">
                        <image className="m" xlinkHref="https://assets.codepen.io/721952/liquidMask1.svg" y="-1" width="100%" height="10620" />
                    </mask>
                    <g mask="url(#m1)">
                    <image className="whitebackground" xlinkHref="https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/whitebackground.jpg" width="630" height="420"/>
                    </g>
                </svg>
			</StyledMenuVeil>
            <StyledMenuContents ref={contentsRef}>
                <ul>
                    <li>         
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" xmlSpace="preserve">
                            <g>
                                <g>
                                    <path d="M407,225H302v30h105c47.535,0,87.787-31.754,100.675-75.163C482.934,207.533,446.971,225,407,225z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M300.743,75c-1.814-10.764-5.541-20.886-10.825-30C274.334,18.12,245.244,0,212,0c-44.516,0-81.58,32.489-88.743,75H0v30
                                        h122v105c0,85.925,66.023,156.707,150,164.311V195h135c57.897,0,105-47.103,105-105V75H300.743z M212,105h-30V75h30V105z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M317,285h-15v122c0,57.897,47.103,105,105,105h15V390C422,332.103,374.897,285,317,285z"/>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li onClick={()=>history.push('/map')}>RESTAURANT</li>
                    <li onClick={()=>history.push('/map')}>CAFE</li>
                    <li onClick={()=>history.push('/map')}>SHOPPING</li>
                </ul>
            </StyledMenuContents>
            
        </>

	);
}

export default Menu;