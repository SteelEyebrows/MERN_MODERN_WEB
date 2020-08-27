import React, { useState,useRef,useEffect } from 'react';
import { StyledThird,WaveTop } from './_style';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';

const gridGallery = [
    {
        type:"double",
        thumnail:"https://source.unsplash.com/crVO0UMdoVU/600x600",
        title:"Beach",
        subtitle:"Mølen, Nevlunghamn, Norway",
        desc:"This grid item spans one column and three rows to create focus. This is achieved by setting."
    },
    {
        type:"single",
        thumnail:"https://source.unsplash.com/xkMArBuwK44/600x600",
        title:"Louvre Museum Pyramid",
        subtitle:"Paris, France",
        desc:"This grid item spans one column and three rows to create focus. This is achieved by setting."
    },
    {
        type:"single",
        thumnail:"https://source.unsplash.com/vMRMYoLQzwo/600x600",
        title:"In the Bay",
        subtitle:"Oslo, Norway",
        desc:"Greeting the ships sailing in on a late summer evening."
    },
    {
        type:"single",
        thumnail:"https://source.unsplash.com/i9FLJwYhVQs/600x600",
        title:"Bonfire by the Lake",
        subtitle:"Øyungen, Norway",
        desc:"Low light over a lake as three friends warm themselves by the fire."
    },
    {
        type:"double",
        thumnail:"https://source.unsplash.com/8hRYTck6LBQ/600x600",
        title:"Sunset Lake",
        subtitle:"Somewhere, Earth",
        desc:"This grid item spans one column and three rows to create focus. This is achieved by setting."
    },
    {
        type:"single",
        thumnail:"https://source.unsplash.com/S2YssLw97l4/600x600",
        title:"Sparklers and Warm Souls",
        subtitle:"Porsgrunn, Norway",
        desc:"A couple enjoys the sparkles of warm friendship."
    }
]

const Third = ({
    
    enterCircle,
    leaveCircle
}) =>{

	return (

        <StyledThird id="slide--3">
            <main id="content" className="main-area">
                <ul className="cards">
                    <li className="card-item">
                        <h2>REVIEW</h2>
                    </li>
                {
                    gridGallery.map((item,i)=>{
                        return(
                            <li 
                                className={item.type==="single"?"card-item":"card-item double"}
                                onMouseEnter={enterCircle}
                                onMouseLeave={leaveCircle}
                            >
                                <a href="#" target="_blank" rel="nofollow">
                                    <figure className="card">
                                    <img src={item.thumnail} alt={item.title}/>
                                    <figcaption className="caption">
                                        <b className="caption-title">{item.title}</b>
                                        <p>{item.desc}</p>
                                    </figcaption>
                                    </figure>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            </main>
        </StyledThird>
	);
}

export default Third;