import {get} from '@/http/axios'
export default{
namespaced:true,
state:{
    logoManage:[],
    total:10,
    type:[]
},
getter:{

},
mutations:{
    changeLogoManage(state,data){
        state.total = data.total
        state.logoManage = data.list
    },

},
actions:{
    async loadLogoManage(context,params){
        let res = await get('/baseLog/pageQuery',params)
            console.log(res)
            context.commit('changeLogoManage',res.data)
            return res
    },

}
}
