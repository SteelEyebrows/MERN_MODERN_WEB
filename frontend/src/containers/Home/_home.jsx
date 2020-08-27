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
            let i = 1;
        gsap.fromTo(".blob", {
            rotation: function(index) { 
                return index * 90; 
            },
            x:200, y:0.1,

        },
            {
                rotation: function(index) { 
                    return index * 90 + 360; 
                },
                x:200, y:0.1,
                duration: 20,
                repeat: -1,
                yoyo:true,
                stagger:0.1,

            }
            )
         let firstTrigger = gsap.timeline({
             scrollTrigger: {
                trigger: firstPageOutRef.current,
                scrub: 1,
                start: "top top", // position of trigger meets the scroller position
                end: "bottom top"
             }
        });
        
        firstTrigger
        .to(airplainRef.current, {
            y:-500,
        });

		let secondTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: '#slide--2',
                scrub: 1,
                start: "top 100%", // position of trigger meets the scroller position
                end: "top 20%"
            }
        })
        secondTrigger
        .to('.quote__1', {
            y:"+=200",
            ease: Sine.easeIn
        },)	
        .to('.quote__2', {
            x:"+=200",
            ease: Sine.easeIn
        },0)
        .to('#masterTextPath', {
            attr: { startOffset: "0%" },
            ease: Sine.easeIn
        },0)			
                
        
        let thirdTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: '#slide--3',
                scrub: 1,
                start: "top 100%", // position of trigger meets the scroller position
                end: "top 20%"
            }
        })
        thirdTrigger
        .to(".cards li a", {
            x: '100%',
            stagger:{
              each:0.5
            }
          });
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
		
		gsap.to(airplainRef.current,0.5, {x: newvalueX,y:newvalueY});
	}, [x,y]);
    
    return(
        <>
            <Home 
                history={history}
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
