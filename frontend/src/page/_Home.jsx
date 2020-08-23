import * as React from 'react';
import {MainTemplate} from 'components';
import {HomeContainer,MenuContainer} from 'containers';
        
const Home = () =>(
    <MainTemplate header={<MenuContainer />}>
        <HomeContainer />
    </MainTemplate>
);

export default Home;