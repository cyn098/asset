<template>
    <div class="inventory">
        <div class="inventory_hander">
             <el-select v-model="value" size="small" clearable placeholder="请选择物品类型">
                <el-option
                v-for="item in type"
                :key="item.id"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>
            <el-input
                placeholder="请输入关键字"
                size="small"
                v-model="input"
                clearable>
            </el-input>
            <el-button type="warning" size="small" plain>查询</el-button>
            <el-button style="float:right" type="warning" size="small" plain>批量入库</el-button>
            <el-button style="float:right" type="warning" size="small" plain>入库</el-button>
        </div>
        <!-- 表格部分 -->
        <div class="inventory_content">
            <el-table
            size="small"
            :data="inventory"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="序号"
            fixed
            width="80">
            </el-table-column>
            <el-table-column
            prop="name"
            label="物品名称"
            fixed
            width="180">
            </el-table-column>
             <el-table-column
            prop="code"
            label="物品编码"
            width="180">
            </el-table-column>
             <el-table-column
            prop="brand"
            label="品牌"
            width="180">
            </el-table-column>
             <el-table-column
            prop="specification"
            label="规格型号"
            width="180">
            </el-table-column>
             <el-table-column
            prop="type"
            label="类型"
            width="180">
            </el-table-column>
             <el-table-column
            prop="price"
            label="单价"
            width="180">
            </el-table-column>
             <el-table-column
            prop="num"
            label="总数量"
            width="180">
            </el-table-column>
             <el-table-column
            prop="numRemain"
            label="剩余个数"
            width="180">
            </el-table-column>
             <el-table-column
            prop=""
            label="介绍"
            width="380">
            </el-table-column>
            <el-table-column
            prop="address"
            width="200"
            fixed="right"
            align="center"
            label="操作">
                <template v-slot="{row}">
                    <span>删除</span>
                    <span>修改</span>
                    <span>详情</span>
                </template>
            </el-table-column>
            </el-table>
        </div>
        <div class="inventory_footer">
             <el-pagination
                @current-change="handleChange"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="totals">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import{mapState,mapActions} from "vuex"
export default {
    data(){
        return {
            page:1,
            pageSize:10,
            totals:20,

            input:'',
        
        value: ''
      }
    },
    computed:{
        ...mapState('inventory',['inventory','total','type'])
    },
    created(){
        this.load()
    },

    methods:{
        ...mapActions('inventory',['loadInventory','loadType']),
        //加载库存物品
        load(){
            let obj = {
                page:this.page,
                pageSize:this.pageSize
            }
             this.loadInventory(obj).then(r=>{
                 this.totals =this.total
        })
        this.loadType()
        },
        //改变当前页
        handleChange(val){
            this.page = val
            this.load()
     }

    },
    
}
</script>
<style scoped> 
.inventory_hander .el-input{
    width: 200px;
}
.inventory_content{
    margin-top:10px ;
    margin-bottom: 10px;
}
.span{
    margin: 10px;
    color:yellow;
    cursor: pointer;
}
</style>    