import React,{useState,useEffect,useRef} from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {useSelector,useDispatch} from 'react-redux';
import {Menu} from 'components';
import storage from 'lib/storage';
import { authAction } from "store/actions";

const MenuContainer = ({history,match}) =>{    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const veilRef = useRef(null);
    const contentsRef = useRef(null);

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const postLogOut =()=>dispatch(authAction.logOutRequest());
    
    const tl = gsap.timeline();
    var menuAnimation = tl
    .to(veilRef.current, 0.1, { autoAlpha: 1 })
    .to('.m', 2, {
        y:-10266, ease:'steps(29)', stagger:-0.3}, 0)
    .to(contentsRef.current, 0, {autoAlpha: 1},"-=0.1")
    .to('.m', 0, {autoAlpha: 0})
    .reverse();

    const onClickMenu = () =>{
        menuAnimation.reversed()?
        menuAnimation.play()
        :menuAnimation.reverse();
    }
    useEffect(
		() => {
			const userData = storage.get('AUTH');
			if (userData!=="undefined") setIsAuthenticated(true);
			else setIsAuthenticated(false);
		},
		[data.user],
    );
    return(
        <>
            <Menu 
                history={history}
                isAuthenticated={isAuthenticated}
                postLogOut={postLogOut}
                veilRef={veilRef}
                contentsRef={contentsRef}
                onClickMenu={onClickMenu}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    user: rootReducer.auth.user,
});

export default MenuContainer;
