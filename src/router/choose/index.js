import Choose from "../../components/choose"
import chooseMore from '../../components/chooseMore'
export default {
    path:'/choose',
    component:Choose,
    meta:{
        tabBarFlag:true
    },
    children:[
        {
            path:'/more',
            component:chooseMore
        }
    ]

}