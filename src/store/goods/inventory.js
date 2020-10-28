import {get} from '@/http/axios'
export default{
    namespaced:true,
    state:{
        inventory:[],
        total:10,
        type:[]
    },
    getter:{

    },
    mutations:{
        changeInventory(state,data){
            state.total = data.total
            state.inventory = data.list
        },
        changeType(state,data){
           state.type = data
        }
    },
    actions:{
        async loadInventory(context,params){
            let res = await get('/asset/pageQuery',params)
            // console.log(res)
            context.commit('changeInventory',res.data)
            return res
        },
        //加载物品类型
        async loadType(context,params){
            let res = await get('/assetType/findAll')
            // console.log(res)
            context.commit('changeType',res.data)
            return res
        }
    }
}