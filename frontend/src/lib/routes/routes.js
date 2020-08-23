import {Home,Login,Register} from 'page';


export const routes =[
    {
        path:'/',
        page:Home,
        exact:true
    },
    {
        path:'/login',
        page:Login,
        exact:true
    },
    {
        path:'/register',
        page:Register,
        exact:true
    }
]