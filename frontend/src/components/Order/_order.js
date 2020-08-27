import React, { useState,useRef,useEffect } from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {StyledOrder}from './_style';
import DatePicker from "react-datepicker";
import QRCode from 'qrcode.react';
import "react-datepicker/dist/react-datepicker.css";

const Order = ({
        date,
        setDate,
        place
}) =>{
        const CustomInput = ({ value, onClick }) => (
                <button 
                style={{
                        backgroundColor:'#ed0043',
                        borderRadius:'8px',
                        border:'none',
                        color:'#fff',
                        padding:'10px'
                }} onClick={onClick}
                >
                  {value}
                </button>
              );

	return (
        <StyledOrder>
        <div>
        <div className="top">
        
        <div className="printer" />
        </div>
        <div className="receipts-wrapper">
        <div className="receipts">
                <div className="receipt">
                        <div className="upper">
                                <DatePicker
                                        selected={date}
                                        onChange={setDate}
                                        customInput={<CustomInput />}
                                />
                                <svg className="logo" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                <g>
                                        <g>
                                        <path d="M407,225H302v30h105c47.535,0,87.787-31.754,100.675-75.163C482.934,207.533,446.971,225,407,225z"/>
                                        </g>
                                </g>
                                <g>
                                        <g>
                                        <path d="M300.743,75c-1.814-10.764-5.541-20.886-10.825-30C274.334,18.12,245.244,0,212,0c-44.516,0-81.58,32.489-88.743,75H0v30
                                                h122v105c0,85.925,66.023,156.707,150,164.311V195h135c57.897,0,105-47.103,105-105V75H300.743z M212,105h-30V75h30V105z"/>
                                        </g>
                                </g>
                                <g>
                                        <g>
                                        <path d="M317,285h-15v122c0,57.897,47.103,105,105,105h15V390C422,332.103,374.897,285,317,285z"/>
                                        </g>
                                </g>
                                </svg>
                                
                        </div>
                <div className="route">
                <h2>{place.name}</h2>
                </div>
                <div className="details">
                        <div className="item">
                               
                        </div>
                        <div className="item">
                                <span>Address.</span>
                                <h3>{place.vicinity}</h3>
                        </div>
                </div>
                </div>
                <div className="receipt qr-code">
                        <QRCode 
                                size={74}
                                value="http://facebook.github.io/react/" 
                        />
                <div className="description">
                <h2>선불결제</h2>
                <p>Show QR-code when requested</p>
                </div>
                </div>
        </div>
        </div>
        </div>
        </StyledOrder>
	);
}

export default Order;