<template>
   <div class="logoManage">
       <div class="logoManage_header">
            <div>
                <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                    size="small"
                    v-for="item in type"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input
                    placeholder="请输入关键字"
                    size="small"
                    v-model="input"
                    clearable>
                </el-input>
                <el-button type="warning" size="small" plain>出库</el-button>
                <el-button style="float:right" type="warning" size="small" plain>查询</el-button>
            </div>
       </div>
       <!-- 表格部分 -->
       <div class="logoManage_content">
        <el-table
            :data="logoManage"
            border
            size="small"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="序号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="realname"
                label="姓名"
                width="180">
            </el-table-column>
             <el-table-column
                prop="content"
                label="内容"
                width="180">
            </el-table-column>
            <el-table-column
                prop="logtime"
                align="center"
                label="时间">
            </el-table-column>
        </el-table>
       </div>
        <div class="logoManage_footer">
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
        data() {
        return {
            input:'',
            page:1,
            pageSize:10,
            totals:20,
    
            value: '',
        }
        },
        computed:{
            ...mapState('logoManage',['logoManage','total','type'])
        },
        created(){
            this.load()
        },

        methods:{
            ...mapActions('logoManage',['loadLogoManage',]),
            //加载库存物品
            load(){
                let obj = {
                    page:this.page,
                    pageSize:this.pageSize
                }
                this.loadLogoManage(obj).then(r=>{
                    this.totals = this.total
            })
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
.logoManage_header .el-input{
    width: 200px;
}
.logoManage_content{
    margin-top:10px ;
    margin-bottom: 10px;
}
.span{
    margin: 10px;
    color:yellow;
    cursor: pointer;
}
</style>    