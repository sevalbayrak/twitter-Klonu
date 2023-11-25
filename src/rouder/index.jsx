import { createBrowserRouter } from "react-router-dom";
import Home from'~/pages/home';
import Explore from'~/pages/explore';
import Notification from'~/pages/notification';
import Not from'~/pages/not'
import MainLayout from '~/layouts/main'
import Porifel from "~/pages/porifel";
import Messages from "~/pages/messages";
import Lists from "~/pages/lists";
import Bookmarks from "~/pages/bookmarks";
import Verified from "~/pages/verified";

const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/explore',
                element:<Explore/>
            },
            {
                path:'/messages',
                element:<Messages/>
            },
            {
                path:'/lists',
                element:<Lists/>
            },
            {
                path:'/bookmarks',
                element:<Bookmarks/>
            },
            {
                path:'/verified',
                element:<Verified/>
            },
            {
                path:':slug',
                element:<Porifel/>
            },
            {
                path:'/notifications',
                element:<Notification/>
            },
            
        ]
    },
    {
        path:'*',
        element:<Not/>

    },
    
])

export default router ;