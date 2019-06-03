export default {
    getChooseIndexList(state,params){
        state.chooseList = params
        console.log(state.chooseList)
        for(var i = 0 ; i < state.chooseRouter.length ; i++){
            state.chooseList[i].data.route = state.chooseRouter[i]
        }
        localStorage.setItem('666',JSON.stringify(params))
        
    },
    getRouteIndex(state,params){
        state.routerIndex = params
    }
}