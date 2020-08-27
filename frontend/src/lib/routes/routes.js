import {Home,Map,Login,Register,Order} from 'page';


export const routes =[
    {
        path:'/MERN_MODERN_WEB',
        page:Home,
        exact:true
    },
    {
        path:'/map',
        page:Map,
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
    },{
        path:'/order',
        page:Order,
        exact:true
    }
]