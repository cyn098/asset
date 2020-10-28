import {get} from '@/http/axios'
export default{
    namespaced:true,
    state:{
        goodsRequest:[],
        total:10,
        type:[]
    },
    getter:{

    },
    mutations:{
        changeGoodsRequest(state,data){
            state.total = data.total
            state.goodsRequest = data.list
        },
        changeType(state,data){
           state.type = data
        }
    },
    actions:{
        async loadGoodsRequest(context,params){
            let res = await get('/asset/pageQuery',params)
            // console.log(res)
            context.commit('changeGoodsRequest',res.data)
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