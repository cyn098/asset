import {get} from '@/http/axios'
export default{
    namespaced:true,
    state:{
        typeManage:[],
        total:10,
        type:[]
    },
    getter:{

    },
    mutations:{
        changeType(state,data){
            state.type = data
         }
    },
    actions:{
        async loadTypeManage(context,params){
            let res = await get('/assetType/findAll')
            // console.log(res)
            context.commit('changeType',res.data)
            return res
        }
    }

}