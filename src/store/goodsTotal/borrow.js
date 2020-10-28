import {get,post } from '@/http/axios'
export default{
    namespaced:true,
    state:{
        borrow:[],
        total:10,
        type:[]
    },
    getter:{

    },
    mutations:{
        changeBorrow(state,data){
            state.total = data.total
            state.borrow = data.list
        },
        changeType(state,data){
           state.type = data
        }
    },
    actions:{
        async loadBorrow(context,params){
            let res = await post('/applyfor/pageQuery',params)
            // console.log(res)
            context.commit('changeBorrow',res.data)
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