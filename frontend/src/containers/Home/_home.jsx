import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Home} from 'components';
import {useMouseMove} from 'lib/hoc';
import gsap, { Sine } from 'gsap';
import { useIntersection } from 'react-use';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from "gsap/ScrollToPlugin";

const HomeContainer = ({history,match}) =>{

    
    const [ tween, setTween ] = useState();
    const [ second, setSecond ] = useState();
    const {x, y, handleMouseMove} =useMouseMove();
    const airplainRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTo = (n) => gsap.to(window, 1, { scrollTo: `#slide-${n}` });
    //-----------------------------
    const firstPageOutRef = useRef(null);
    const secondPageRef = useRef(null);

      useEffect(
		() => { 

         let firstTrigger = gsap.timeline({
             scrollTrigger: {
                trigger: firstPageOutRef.current,
                scrub: 1,
                start: "top top", // position of trigger meets the scroller position
                end: "bottom top"
             }
        });
        
        firstTrigger.to(airplainRef.current, {
            y:500,
            autoAlpha: 0,
        })
        .to('.maintitle', {
            y:-500,
        }, 0);

		let secondTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: firstPageOutRef.current,
                scrub: 1,
                start: "top bottom", // position of trigger meets the scroller position
                end: "bottom top"
            }
        })
        secondTrigger
        .to('.doubleExposure', {
            height:300,
            ease: Sine.easeIn
        },)	
        .to('.nomalImage', {
            width:'20%',
            ease: Sine.easeIn
        },0)
        .to('#masterTextPath', {
            attr: { startOffset: "0%" },
            ease: Sine.easeIn
        },0)			
				
		},
		[ ],
    );


   
    //-----------------------------
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();


    useEffect(() => {		
		let offsetLeft = airplainRef.current?.offsetLeft;
		let offsetTop = airplainRef.current?.offsetTop;
		
		let pageX = x - offsetLeft;
		let pageY = y - offsetTop;
	
		let newvalueX = (pageX-window.innerWidth/2)/window.innerWidth * -100;
		let newvalueY = (pageY-window.innerHeight/2)/window.innerHeight * -30;
		
		gsap.to(airplainRef.current,0.5, {backgroundPosition: `${newvalueX}px ${newvalueY}px`});
	}, [x,y]);
    
    return(
        <>
            <Home 
                firstPageOutRef={firstPageOutRef}
                handleMouseMove={handleMouseMove}
                airplainRef={airplainRef}

                secondPageRef={secondPageRef}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default HomeContainer;
