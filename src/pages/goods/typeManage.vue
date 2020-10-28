<template>
    <div>
        <div class="typeManage_header">
            <el-button type="primary" size="small">新增</el-button>
        </div>
        <div class="typeManage_content">
            <el-table
                :data="type"
                border
                style="width: 100%">
                <el-table-column
                fixed
                prop="id"
                label="序号"
                width="150">
                </el-table-column>
                <el-table-column
                prop="name"
                label="名称"
                >
                </el-table-column>
               <el-table-column
                prop="address"
                fixed="right"
                width="180"
                align="center"
                label="操作">
                <template v-slot="{row}">
                    <span>删除</span>
                    <span>修改</span>
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
      
        created(){
            this.load()
        },
        computed:{
            ...mapState('typeManage',['typeManage','total','type'])
        },
        data() {
            return {
                    page:1,
                    pageSize:10,
                    totals:20,
            }
        },
          methods: {
            ...mapActions('typeManage',['loadTypeManage']),
            load(){
                let obj = {
                page:this.page,
                pageSize:this.pageSize
                }
                this.loadTypeManage(obj).then(r=>{
                    this.totals = this.total
                })
                this.loadTypeManage()
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
.typeManage_content{
    margin-top:10px ;
    margin-bottom: 10px;
}
.span{
    margin: 10px;
    color:yellow;
    cursor: pointer;
}
</style>