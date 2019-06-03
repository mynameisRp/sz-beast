import {get} from './get'
import getdata from './get'
import axios from 'axios'

export default{
     getChooseIndex({commit}){
        
        get('app/index/classifyDataV2').then((res)=>{
            
            console.log(res.data.modules)
            commit('getChooseIndexList',res.data.modules)
            
        })
        
        
    },
    getChooseIndexOnce({commit},params){
        commit('getChooseIndexList',params)
    }
}