import * as React from 'react';
import {MainTemplate} from 'components';
import {OrderContainer,MenuContainer} from 'containers';
        
const Order = ({history}) =>(
    <MainTemplate header={<MenuContainer />}>
        <OrderContainer  history={history}/>
    </MainTemplate>
);

export default Order;