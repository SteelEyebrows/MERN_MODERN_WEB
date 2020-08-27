import React,{useState,useEffect,useRef} from 'react';
import { Map,Listing,InfoWindow,Marker, GoogleApiWrapper } from 'google-maps-react';
import {StyledDrawing} from './_style';
const mapStyle = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
];


export const DrawMap =({
    latlng,
    places,

    onMapClick,
    onChangeSelectedPlace,
    selectedPlace,
    saveOrder
})=> {
   
    const _mapLoaded = (mapProps, map)=> {
        map.setOptions({
           styles: mapStyle
        })
     }

     
      return (
        <StyledDrawing>
        <Map
          google={window.google}
          zoom={15}
          initialCenter={{ lat: 40.748896, lng: -73.985301 }}
          onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
          onClick={onMapClick}
        >
            <Marker 
                position={{ 
                    lat: latlng.lat, 
                    lng: latlng.lng 
                    }} 
                icon={{
                    url: "https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/map/main-marker.gif",
                }}    
            />
            {
                places.results&&places.results.map((mark,i)=>{
                    return(
                        <Marker 
                        key={i}
                        name={mark.name}
                        onClick={()=>onChangeSelectedPlace(mark)}
                        position={{ 
                            lat: mark.geometry.location.lat, 
                            lng: mark.geometry.location.lng 
                            }} 
                        icon={{
                            url: "https://s3.ap-northeast-2.amazonaws.com/modern.airplane.web/map/pin.png",
                        }}    
                    />
                    )
                })
            }
            {
                selectedPlace.photos&&
                <div className="infoWindow">
                    <div className="thumnail">

                        <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedPlace.photos[0].photo_reference}&key=AIzaSyC_3EPS3YBlLPAU0_1_kAAEQitLR6aUexk`}></img> 
                    </div>
                    <div className="info">
                        {/* <p>{selectedPlace.rating}</p> */}
                        <p className="name">{selectedPlace.name}</p>
                        <p className="visinity">{selectedPlace.vicinity}</p>
                        <button onClick={()=>saveOrder()}>register</button>
                    </div>
                </div>
            }
        </Map>
        </StyledDrawing>
      );
    
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyC_3EPS3YBlLPAU0_1_kAAEQitLR6aUexk'
  })(DrawMap);