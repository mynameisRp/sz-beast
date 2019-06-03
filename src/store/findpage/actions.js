import axios from "axios";

export default {
    getlist({commit}){
        axios({
            method:"get",
            url:"https://api.thebeastshop.com/app/shareOrder/evaluate?limit=20&offset=0"
        }).
        then((res)=>{
           
            commit("mutationsgetlist",res.data);
            
        })
    },
    togglechange(state){
        commit("mutationschange",state)
    }
    
}