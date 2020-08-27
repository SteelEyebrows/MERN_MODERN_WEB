import * as React from 'react';
import {MainTemplate} from 'components';
import {MapContainer,MenuContainer} from 'containers';
        
const Map = ({history}) =>(
    <MainTemplate header={<MenuContainer />}>
        <MapContainer  history={history}/>
    </MainTemplate>
);

export default Map;