import * as React from 'react';
import {MainTemplate} from 'components';
import {LoginContainer,MenuContainer} from 'containers';
        
const Login = () =>(
    <MainTemplate header={<MenuContainer />}>
        <LoginContainer />
    </MainTemplate>
);

export default Login;