export default {
    mutationsHeader(state, params) {
        state.headerBanner = params;
    },
    mutationsNewPro(state, params) {
        state.newProImgList = params;
    },
    mutationsDelay(state, params){
        state.delayList = params;
    },
    mutationsImgList(state, params){
        state.imgList = params[0];
        state.imgListBottom = params[1];
    },
    mutationsLogo(state, params){
        state.logoList = params;
    }
}