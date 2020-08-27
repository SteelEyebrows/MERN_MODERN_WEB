import * as React from 'react';
import {MainTemplate} from 'components';
import {RegisterContainer,MenuContainer} from 'containers';
        
const Register = ({history}) =>(
    <MainTemplate header={<MenuContainer />}>
        <RegisterContainer  history={history} />
    </MainTemplate>
);

export default Register;