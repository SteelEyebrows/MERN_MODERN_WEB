import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { mapAction } from "../../store/actions";
import {Map} from 'components';
import gsap, { Sine } from 'gsap';
import storage from 'lib/storage';

const MapContainer = ({history,match}) =>{
    const [ latlng, setLatlng ] = useState({
        lat:40.748896,lng:-73.985301
    });
    const [ selectedPlace, setsSelectedPlace ] = useState({});
    // const [ infoWindowGSAP, setInfoWindowGSAP ] = useState(
    //     gsap.timeline()
    // )    
    const onChangeLatlng = (lat,lng)=> setLatlng({lat,lng});
    const onChangeSelectedPlace = (mark) =>{
        gsap.to('.infoWindow',0.5,{
            y:-200, 
            ease:Sine.easeIn      
        });
        setsSelectedPlace(mark);
        gsap.to('.infoWindow',0.5,{
            y:0,   
            delay:0.5,
            ease:Sine.easeIn      
        });
    }

    const onMapClick = (t, map, coord) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        onChangeLatlng(lat,lng);
      }

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    

    const getPlace =(passlatlng)=>
        dispatch(mapAction.placeRequest(passlatlng));
    const saveOrder =()=>{
        const userData = storage.get('AUTH');
        if(userData!=="undefined"){
            storage.set('ORDER',selectedPlace);
        }else{
            // storage.set('ORDER',selectedPlace);
            alert('로그인 후 사용가능한 서비스입니다.')
        }    
    }
    useEffect(
		() => { 
            getPlace(latlng);
		},
		[latlng],
    );
    return(
        <>
            <Map 
                history={history}
                latlng={latlng}
                onChangeLatlng={onChangeLatlng}
                places={data.places}

                onMapClick={onMapClick}
                onChangeSelectedPlace={onChangeSelectedPlace}
                selectedPlace={selectedPlace}
                saveOrder={saveOrder}
            />
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    places:rootReducer.map.places,
    user: rootReducer.auth.user,
});

export default MapContainer;
