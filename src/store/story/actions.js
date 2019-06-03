import axios from "axios";

export default {
    getlist({commit}){
        axios({
            method:"get",
            url:"https://api.thebeastshop.com/app/shareOrder/evaluate?limit=20&offset=0"
        }).
        then((res)=>{
            res.data.map((item)=>{
                item.flag = true;
            })
            commit("getlist",res.data);
            
        })
    }
    
}