import React,{useEffect,useRef,useState} from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import {useSelector,useDispatch} from 'react-redux';
import {Order} from 'components';
import storage from 'lib/storage';
const OrderContainer = ({history,match}) =>{    
    const [ place, setPlace ] = useState({});
    const [ date, setDate ] = useState(new Date());

    const onChangeDate = (d) => setDate(d); 

    useEffect(
		() => { 
            const orderPlace = storage.get('ORDER');
            if(orderPlace){
                setPlace(orderPlace);
                gsap.to('.receipts',2.5,{
                    y:0, 
                    ease:Sine.easeIn      
                });
            }else{
                alert('empty');
            }    
		},
		[],
    );

    return(
        <>
            <Order 
                history={history}
                date={date}
                setDate={onChangeDate} 
                place={place}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    
});

export default OrderContainer;
