import * as React from "react";
import { withRouter } from "react-router-dom";
import {StyledMap} from './_style';
import {default as Drawing} from "./drawing";

const Map = ({   
    latlng,
    places,

    onMapClick,
    onChangeSelectedPlace,
    selectedPlace,
    saveOrder
}) => {


 return (
    <>			 
      <StyledMap>
        <Drawing 
            places={places} 
            latlng={latlng} 

            onMapClick={onMapClick}
            onChangeSelectedPlace={onChangeSelectedPlace}
            selectedPlace={selectedPlace}
            saveOrder={saveOrder}
        />
      </StyledMap>
		</>
    );
  };

export default withRouter(Map);
