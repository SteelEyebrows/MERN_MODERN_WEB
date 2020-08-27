import * as React from 'react';
import {MainTemplate} from 'components';
import {HomeContainer,MenuContainer} from 'containers';
        
const Home = ({history}) =>(
    <MainTemplate header={<MenuContainer history={history}/>}>
        <HomeContainer history={history}/>
    </MainTemplate>
);

export default Home;