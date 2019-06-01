import { IndexData, newProduct } from '@api/http'
export default {
    async getData({commit},type){
       let data = await IndexData();
        if (type == "imageBanner"){
            commit("mutationsData", data.data.modules[0].data.items)
        }
    },
    async getNewPro({commit}){
        let data = await newProduct();
        console.log(data);
    }
}