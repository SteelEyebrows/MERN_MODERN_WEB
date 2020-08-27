import React,{useState,useEffect,useRef} from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "store/actions";
import {Register} from 'components';


const RegisterContainer = ({history,match}) =>{    
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const [formData,setFormData] = useState({
        email:"",
        password1:"",
        password2:""
})
    const {email,password1,password2} = formData;
    
    const postRegister = () => dispatch(authAction.registerRequest({
        email,password:password1
    }))
    
    const handleChange = text => e =>{
            setFormData({...formData,[text]:e.target.value})
    }
    const handleSubmit = e =>{
            if(email && password1){
                    if(password1 === password2){
                        postRegister();
                    }else{
                            alert('passwords dont matches');
                    }
            }else{
                    alert('please fill all fields')
            }
}
    return(
        <>
            <Register 
                history={history}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default RegisterContainer;
