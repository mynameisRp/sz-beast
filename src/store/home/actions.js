import { IndexData, newProduct } from '@api/http'
export default {
    // 头部轮播
     async headerBannerList({commit}){
         let data = await IndexData();
         commit("mutationsHeader", data.data.modules[0].data.items)
    },
    // 新产品轮播
    async newProList({commit}){
        let data = await IndexData();
        let imgList = await newProduct(data.data.modules[1].data.codes);
        commit("mutationsNewPro", imgList.data.products)
    },
    // 发货延迟公告
    async delayData({commit}){
         let data = await IndexData();
        //  console.log(data.data.modules[2].data.items)
         commit("mutationsDelay", data.data.modules[2].data.items)
    },
    // 展示主体
    async imgListData({commit}){
         let data = await IndexData();
         let dataList = data.data.modules;
         let imgListArr = [];
         let imgListBottom = [];
         for (var i = 0; i < dataList.length; i++){
             if (dataList[i].type == "image-index" && i < 14) {
                 imgListArr.push(dataList[i]);
             } else if (dataList[i].type == "image-index" && i > 14){
                 imgListBottom.push(dataList[i]);
             }
         }
         console.log(imgListBottom)
         commit("mutationsImgList", [imgListArr, imgListBottom])
    },
    async logoListData({commit}){
        let data = await IndexData();
        let dataList = data.data.modules;
        let logoList = [];
        for (var i = 0; i < dataList.length; i++){
            if (dataList[i].type == "image"){
                logoList.push(dataList[i]);
            }
        }
        commit("mutationsLogo", logoList);
    }

}