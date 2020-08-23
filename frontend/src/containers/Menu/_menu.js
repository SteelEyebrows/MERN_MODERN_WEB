import React,{useEffect,useRef} from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {useSelector,useDispatch} from 'react-redux';
import {Menu} from 'components';


const MenuContainer = ({history,match}) =>{    
    const veilRef = useRef(null);
    const inkRef = useRef(null);
    const contentsRef = useRef(null);

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    
    const tl = gsap.timeline();
    var menuAnimation = tl
    .to(veilRef.current, 0.1, { autoAlpha: 1 })
    .to(inkRef.current, 2, {
        backgroundPosition:"-2500vw 0px",
        ease:SteppedEase.config(25),
        paused:false
      })
    .to(contentsRef.current, 0, {autoAlpha: 1},"-=0.1")
    .to(inkRef.current, 0, {autoAlpha: 0})
    .reverse();

    const onClickMenu = () =>{
        menuAnimation.reversed()?
        menuAnimation.play()
        :menuAnimation.reverse();
    }

    return(
        <>
            <Menu 
                veilRef={veilRef}
                inkRef={inkRef}
                contentsRef={contentsRef}
                onClickMenu={onClickMenu}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default MenuContainer;
