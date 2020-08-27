import React,{useState,useEffect,useRef} from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "store/actions";
import {Login} from 'components';

const LoginContainer = ({history,match}) =>{    
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })
    const {email,password} = formData;
    const postLogin = () => dispatch(authAction.loginRequest({
        email,password
    }))
    const handleChange = text => e =>{
        setFormData({...formData,[text]:e.target.value})
    }
    const handleSubmit = e =>{
        if(email && password){
            postLogin();
        }else{
            alert('please fill all fields')
        }
}
    return(
        <>
            <Login 
                history={history}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default LoginContainer;
