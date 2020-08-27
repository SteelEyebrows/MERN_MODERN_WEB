import * as React from 'react';
import {MainTemplate} from 'components';
import {LoginContainer,MenuContainer} from 'containers';
        
const Login = ({history}) =>(
    <MainTemplate header={<MenuContainer />}>
        <LoginContainer  history={history}/>
    </MainTemplate>
);

export default Login;