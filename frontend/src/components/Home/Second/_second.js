import React, { useState,useRef,useEffect } from 'react';
import { StyledSecond,WaveTop } from './_style';

import gsap, {TweenMax,TimelineMax,Back, Sine } from 'gsap';


  
  class Page extends React.Component {
    constructor() {
      super();
      this.state = {
        screen: 0,
        splitText: undefined
      };
      this.toggleShape = this.toggleShape.bind(this);
    }
    
    componentDidMount() {
      var splitText = this.staggerP.childNodes;
      this.setState({
        splitText: splitText
      });
      gsap.set([this.g1, this.g2, this.g3, this.g4], {
        visibility: 'visible'
      })
      gsap.set(this.hero, {
        css:{
          transformPerspective:700, 
          perspective:400, 
          transformStyle:"preserve-3d"
        }
      });
      if (window.matchMedia("(max-width: 600px)").matches) {
        gsap.set(this.hero, {
          css:{
            transformPerspective:200, 
            perspective:200, 
            transformStyle:"preserve-3d"
          }
        });
      }
    }
  
    toggleShape() {
      if (this.state.screen === 0) {
        this.animFire(this.state.splitText);
      } else if (this.state.screen === 1) {
        this.animMap(this.state.splitText);
      } else if (this.state.screen === 2) {
        this.animBack();
      }
      this.setState({
        screen: (this.state.screen + 1) % 3
      });
    };
  
    animFire() {
      const tl = gsap.timeline();
 
      gsap.set([this.g1.childNodes, this.g2.childNodes, this.g3.childNodes, this.g4.childNodes], {
        clearProps:'svgOrigin'
      });
      gsap.set([this.g1.childNodes, this.g2.childNodes, this.g3.childNodes, this.g4.childNodes], {
        y: -67
      });
  
      tl.add('start');
     
      tl.add( turn(this.g1), 'start+=2');
      tl.add( turn(this.g2), 'start+=2');
      tl.add( turn(this.g3), 'start+=2');
      tl.add( turn(this.g4), 'start+=2');
      tl.fromTo(this.crect, 0.5, {
        scaleX: 1,
        scaleY: 1,
        x: 0,
        y: 0
      }, {
        scaleX: 0.5,
        scaleY: 1.2,
        x: -35,
        y: -50,
        transformOrigin: '50% 50%',
        ease: Sine.easeInOut
      }, 'start+=2');
      tl.fromTo(this.shapes, 0.5, {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1
      }, {
        scale: 2,
        x: 0,
        opacity: 0.25,
        transformOrigin: '50% 50%',
        ease: Sine.easeInOut
      }, 'start+=2');
      if (window.matchMedia("(max-width: 600px)").matches) {
        tl.to(this.heroarea, 0.5, {
          x: -30,
          ease: Sine.easeInOut
        }, 'start+=2');
      }
      tl.to(this.hero, 0.5, {
        x: -125,
        y: 70,
        ease: Sine.easeInOut
      }, 'start+=2');
      tl.to(this.text, 0.5, {
        top: '30vh',
        x: -50,
        ease: Sine.easeInOut
      }, 'start+=2');
      tl.to(this.button, 0.5, {
        x: -112,
        ease: Sine.easeIn
      }, 'start+=2');
      tl.to(this.button.childNodes[0], 0.25, {
        opacity: 0,
        display: 'none',
        ease: Sine.easeIn
      }, 'start+=2');
      tl.to(this.button.childNodes[1], 0.25, {
        display: 'block',
        opacity: 1,
        ease: Sine.easeOut
      }, 'start+=2.25');
      tl.to(this.staggerP, 0.1, {
        opacity: 1,
      }, 'start+=2.5');
      
  
      tl.timeScale(1.7);
  
      //helper for turning the rect
      function turn(group) {
        var tl1 = gsap.timeline();
        
        tl1.staggerFromTo(group.childNodes, 1.5, {
          rotation: 0,
          strokeWidth: 9,
        }, {
          rotation: 90,
          svgOrigin: '527.45 351.8',
          strokeWidth: 1,
          ease: Back.easeOut
        }, 0.05);
  
        return tl1;
      }
    }
    
    animBack() {
      const tl = gsap.timeline();
      
      tl.add('start3');
      tl.to(this.hero, 0.5, {
        z: 0,
        rotationX: 0,
        y: 0,
        x: 0,
        ease: Sine.easeOut
      }, 'start3');
      tl.to(this.gray, 0.25, {
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 'start3');
      tl.to(this.crect, 0.25, {
        scaleX: 1,
        scaleY: 1,
        x: 0,
        y: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 'start3');
       tl.to(this.button.childNodes[2], 0.25, {
        opacity: 0,
        display: 'none',
        ease: Sine.easeIn
      }, 'start3');
      tl.to(this.button.childNodes[0], 0.25, {
        display: 'block',
        opacity: 1,
        ease: Sine.easeOut
      }, 'start3+=0.25');
      tl.to(this.shapes, 0.5, {
        scaleX: 1,
        scaleY: 1,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
        svgOrigin: '520 400',
        ease: Sine.easeInOut
      }, 'start3');
      tl.to(this.text, 0.5, {
        top: 'auto',
        x: 0,
        y: 0,
        ease: Sine.easeIn
      }, 'start3');
      tl.add( turnBack(this.g1), 'start3');
      tl.add( turnBack(this.g2), 'start3');
      tl.add( turnBack(this.g3), 'start3');
      tl.add( turnBack(this.g4), 'start3');
      
      
      //helper for returning
      function turnBack(group) {
        let tl3 = gsap.timeline();
        
        tl3.staggerTo(group.childNodes, 0.8, {
          rotation: 0,
          strokeWidth: 9,
          scaleX: 1,
          scaleY: 1,
          svgOrigin: '527.45 351.8',
          ease: Back.easeOut
        }, 0.05);
        
        return tl3;
      }
    }
    
    animMap(splitText) {
      const tl = gsap.timeline();
  
      tl.add('start2');
      tl.to(this.hero, 0.5, {
        z: 20,
        rotationX: 70,
        y: 100,
        x: 40,
        ease: Sine.easeOut
      }, 'start2');
      tl.to(this.gray, 0.25, {
        autoAlpha: 0,
        ease: Sine.easeOut
      }, 'start2');
      tl.to(this.crect, 0.25, {
        scaleX: 1,
        scaleY: 0.75,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 'start2');
      tl.add( scaleUp(this.g1), 'start2');
      tl.add( scaleUp(this.g2), 'start2');
      tl.add( scaleUp(this.g3), 'start2');
      tl.add( scaleUp(this.g4), 'start2');
      tl.to(this.text, 0.5, {
        top: '20vh',
        x: 0,
        ease: Sine.easeIn
      }, 'start2');
      tl.to(this.shapes, 0.5, {
        opacity: 0.75,
        ease: Sine.easeOut
      }, 'start2');
      tl.to(this.button, 0.3, {
        x: 0,
        ease: Sine.easeOut
      }, 'start2');
      tl.to(this.button.childNodes[1], 0.25, {
        opacity: 0,
        display: 'none',
        ease: Sine.easeIn
      }, 'start2');
      tl.to(this.button.childNodes[2], 0.25, {
        display: 'block',
        opacity: 1,
        ease: Sine.easeOut
      }, 'start2+=0.25');
      if (window.matchMedia("(max-width: 600px)").matches) {
        tl.to(this.heroarea, 0.5, {
          x: -150,
          ease: Sine.easeOut
        }, 'start2+=0.5');
        tl.to(this.text, 0.5, {
          y: 100,
          ease: Sine.easeOut
        }, 'start2');
      };
      
      function scaleUp(group) {
        let tl2 = gsap.timeline();
        
        tl2.staggerTo(group.childNodes, 1, {
          scaleX: 0.93,
          scaleY: 2.22,
          strokeWidth: 5,
          svgOrigin: '493 351.8',
          ease: Sine.easeOut
        }, 0.05);
  
        return tl2;
      }
    }
  
    render() {
  
      return (
        <div className="hero-area" ref={c => this.heroarea = c}>
          <svg className="hero" ref={c => this.hero = c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1054.9 703.6">
            <defs>
              <clipPath id="clip-path" transform="translate(0 -67)">
                <rect id="crect" ref={c => this.crect = c} x="25.6" y="175" width="1011.3" height="550" fill="none"/>
              </clipPath>
            </defs>
            <title>change-shape2</title>
            <g style={{clipPath:'url(#clip-path)'}}>
              <image ref={c => this.map = c} width="1000" height="667" transform="scale(1.05)" xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/persp-map.gif"/>
              <image className="gray" ref={c => this.gray = c} width="1000" height="667" transform="scale(1.05)" xlinkHref="https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/home/second_1.png"/>
            </g>
            <g id="shapes" ref={c => this.shapes = c}>
              <g id="g4" ref={c => this.g4 = c}>
                <path d="M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650" transform="translate(0 -67)" fill="none" stroke="#3953a4" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650" transform="translate(0 -67)" fill="none" stroke="#6abd45" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M417.9,335.9v249s1,54-62,51-53-74.4,12-80c27.2-2.3,33.3-1.9,33.3-1.9H650" transform="translate(0 -67)" fill="none" stroke="#ed2024" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
              </g>
              <g id="g3" ref={c => this.g3 = c}>
                <path d="M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554" transform="translate(0 -67)" fill="none" stroke="#3953a4" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554" transform="translate(0 -67)" fill="none" stroke="#6abd45" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M634.9,552.9v-217s10.5-84-61.5-83.5c-70.1.5-60.1,64.4-47.8,86.2S650,554,650,554" transform="translate(0 -67)" fill="none" stroke="#ed2024" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
              </g>
              <g id="g2" ref={c => this.g2 = c}>
                <path d="M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217" transform="translate(0 -67)" fill="none" stroke="#3953a4" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217" transform="translate(0 -67)" fill="none" stroke="#6abd45" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M525.6,338.6,647.4,546.4l5,6.5c-44,16.5-8,60-8,60,39,51.5,63.5.5,63.5.5,32.5-72-40.1-59.8-61.2-60.1-7-.1-11.8-.4-11.8-.4h-217" transform="translate(0 -67)" fill="none" stroke="#ed2024" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
              </g>
              <g id="g1" ref={c => this.g1 = c}>
                <path d="M634.9,335.9h-217s-57,6-56-58.5c1.1-71,162,37.5,162,37.5s12.9,4.4,1.7,23.7L401.2,554" transform="translate(0 -67)" fill="none" stroke="#3953a4" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M634.9,335.9h-217s-57,6-56-58.5c1.1-71,162,37.5,162,37.5s12.9,4.4,1.7,23.7L401.2,554" transform="translate(0 -67)" fill="none" stroke="#6abd45" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
                <path d="M634.9,335.9h-217s-57,6-56-58.5c1.1-71,162,37.5,162,37.5s12.9,4.4,1.7,23.7L401.2,554" transform="translate(0 -67)" fill="none" stroke="#ed2024" stroke-linecap="round" stroke-linejoin="round" stroke-width="9"/>
              </g>
            </g>
          </svg>
        
        <div className="textarea" ref={c => this.text = c}>
          <h1>Lorem Ipsum.</h1>
          <button className="button" ref={c => this.button = c} onClick={this.toggleShape}>
            <span className="read">Read More </span>
            <span className="share"><IconMap /> See Map</span>
            <span className="home">Return Home</span>
          </button>
          <div className="staggerP" ref={c => this.staggerP = c}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam illum repellendus, molestiae excepturi quo, ab possimus perspiciatis sunt quis. Magni impedit hic culpa, ea. Praesentium facilis dicta excepturi magnam perferendis?</p>
          </div>
        </div>
      </div>
      );
    }
  };

  //IconMap
  function IconMap(props) {
    //props and default props
    const fillColor = props.fillColor || 'currentColor'
  
    return (
      <svg className="iconMap" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 100 100"><path fill={fillColor}  d="M81.4,40.6C80.3,23.7,66.5,10.5,50,10.5S19.7,23.7,18.6,40.6c-0.3,4.3,0.3,8.6,1.9,12.8c1.5,4,3.9,7.9,7.1,11.3l20.5,23.9  c0.5,0.6,1.2,0.9,1.9,0.9s1.4-0.3,1.9-0.9l20.5-23.9c3.2-3.5,5.6-7.3,7.1-11.3C81,49.2,81.7,44.9,81.4,40.6z M50,50.5  c-5.3,0-9.7-4.5-9.7-10s4.3-10,9.7-10s9.7,4.5,9.7,10S55.3,50.5,50,50.5z"></path></svg>
    )
  }



const Second = ({
    secondPageRef,
    
    enterCircle,
    leaveCircle
}) =>{
 
	return (
        <>
         <WaveTop>
            <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
                
                <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#fff" />
            </svg>
        </WaveTop>
        <StyledSecond id="slide--2" ref={secondPageRef}>

        <Page />

        </StyledSecond>
        
            </>
	);
}

export default Second;

                {/* <div className="col">
                    <div className='quoteContainer'>
                        <div className='quote__1'>
                        Then he went on with his reflections<br/>
                        I thought that I was rich,with <br/>
                        </div>
                    </div>
                    <div  className='quoteContainer' />
                        <div className='quote__2'>
                        a flower that was unique in all the world ;<br/>
                        and all I had was a common rose.<br/>
                        </div>   
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
                                WE
                            </textPath>
                            <textPath 
                                id="masterTextPath" 
                                xlinkHref="#master2" 
                                textLength="90" 
                                startOffset="100%"
                            >
                                ARE
                            </textPath>
                        </text>
                    </svg>
                   
                </div> */}