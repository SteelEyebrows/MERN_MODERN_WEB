import * as React from 'react';
import {MainTemplate} from 'components';
import {RegisterContainer,MenuContainer} from 'containers';
        
const Register = () =>(
    <MainTemplate header={<MenuContainer />}>
        <RegisterContainer />
    </MainTemplate>
);

export default Register;