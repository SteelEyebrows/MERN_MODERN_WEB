import React, { useState,useRef,useEffect } from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {StyledLogin}from './_style';

const Login = ({
        handleChange,
        handleSubmit
}) =>{

        useEffect(
		() => { 

	},[ ]
    );

	return (
        <StyledLogin>
         <div>
                <h2>Login</h2>
                <input 
                        onChange={handleChange('email')}
                        type="text" 
                        placeholder="Enter Email" 
                        name="email" 
                        id="email" 
                        required
                />
                <input 
                        onChange={handleChange('password')}
                        type="password" 
                        placeholder="Enter Password" 
                        name="psw" 
                        id="psw" 
                        required
                />
                <button 
                        onClick={()=>handleSubmit()}
                        className="registerbtn"
                >
                        login
                </button>

                </div>
        </StyledLogin>
        

	);
}

export default Login;