<template>
   <div class="borrow">
          <div class="borrow_header">
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
            <el-button type="primary" size="small" plain>搜索</el-button>
        </div>
          <!-- 表格部分 -->
        <div class="borrow_content">
            <el-table
            size="small"
            :data="borrow"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="序号"
            width="80">
            </el-table-column>
            <el-table-column
            prop="name"
            label="申请人"
            width="180">
            </el-table-column>
             <el-table-column
            prop="code"
            label="物品编码"
            width="180">
            </el-table-column>
             <el-table-column
            prop="name"
            label="物品名称"
            width="180">
            </el-table-column>
             <el-table-column
            prop="type"
            label="物品类型"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="申请类别"
            width="180">
            </el-table-column>
             <el-table-column
            prop="brand"
            label="品牌"
            width="180">
            </el-table-column>            
             <el-table-column
            prop="num"
            label="数量"
            width="180">
            </el-table-column>
             <el-table-column
            prop=""
            label="领用日期"
            width="380">
            </el-table-column>
             <el-table-column
            prop=""
            label="预计归还日期"
            width="380">
            </el-table-column>
             <el-table-column
            prop=""
            label="实际归还日期"
            width="380">
            </el-table-column>  
            <el-table-column
            prop=""
            label="状态"
            fixed='right'
            width="180">
            </el-table-column>          
            <el-table-column
            prop="address"
            width="200"
            fixed="right"
            align="center"
            label="操作">
                <template v-slot="{row}">
                    <span>归还</span>
                </template>
            </el-table-column>
            </el-table>
        </div>
        <div class="borrow_footer">
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
        ...mapState('borrow',['borrow','total','type'])
    },
    created(){
        this.load()
    },

    methods:{
        ...mapActions('borrow',['loadBorrow','loadType']),
        //加载库存物品
        load(){
            let obj = {
                page:this.page,
                pageSize:this.pageSize
            }
             this.loadBorrow(obj).then(r=>{
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
.borrow_header .el-input{
    width: 200px;
}
.borrow_content{
    margin-top:10px ;
    margin-bottom: 10px;
}
.span{
    margin: 10px;
    color:yellow;
    cursor: pointer;
}
</style>