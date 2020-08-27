import React, { useState,useRef,useEffect } from 'react';
import {StyledRegister} from './_style';

const Register = ({
        handleChange,
        handleSubmit
}) =>{
        
	return (
        <StyledRegister>
                <div>
                <h2>Register</h2>
                <input 
                        onChange={handleChange('email')}
                        type="text" 
                        placeholder="Enter Email" 
                        name="email" 
                        id="email" 
                        required
                />
                <input 
                        onChange={handleChange('password1')}
                        type="password" 
                        placeholder="Enter Password" 
                        name="psw" 
                        id="psw" 
                        required
                />
                <input 
                        onChange={handleChange('password2')}
                        type="password" 
                        placeholder="Repeat Password" 
                        name="psw-repeat" 
                        id="psw-repeat" 
                        required
                />
                <button 
                        onClick={()=>handleSubmit()}
                        className="registerbtn"
                >
                        Register
                </button>

                </div>
        </StyledRegister>

	);
}

export default Register;