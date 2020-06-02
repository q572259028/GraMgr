<template>
    <div>
<el-container>

<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/renkejiaoshi' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a>查询课程</a></el-breadcrumb-item>

</el-breadcrumb>

        <!--卡片-->
        <el-head>

       
      <el-form ref="queryInfoRef"  :inline="true" :model="queryInfo" class="demo-form-inline">

          <el-form-item>
          <el-input placeholder="请输入老师id "  v-model="queryInfo.id" >
          </el-input>
          </el-form-item>
           <el-form-item>
     <el-button type="primary"  @click="gettableData">查询</el-button>
   </el-form-item>
      </el-form>
       </el-head>
       <el-main>

      
        <el-table :data="tableData"  >
           
            <el-table-column
        prop="cname"
        label="课程名称"
        width="180px">
            </el-table-column>
            <el-table-column
        prop="id"
        label="课程id"
        width="180px">
            </el-table-column>
            <el-table-column  width="100px">
           <template slot-scope="shuju" >
            <el-button type="success" @click="checkbiaozhun(shuju.row.id)" > 
              查看标准
                 </el-button>
           </template>
            </el-table-column>
        </el-table>
         <el-dialog
  title="提示"
  :visible.sync="dialogVisible "
  width="80%"
  :before-close="handleClose">
  <span>课程评分细则：</span>
    <el-table
       :data="detailData"
      style="width: 80%">
      <el-table-column
        prop="id"
        label="指标点编号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="cpid"
        label="课程目标编号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="160">
      </el-table-column>
       <el-table-column
        prop="weight"
        label="权重"
        width="160">
      </el-table-column>
 
   
      
    
    </el-table>

  <span slot="footer" class="dialog-footer">
      <el-button type="primary"  @click="exportToExcel" >生成表格</el-button>
    <el-button @click="dialogVisible  = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible  = false">确 定</el-button>
  </span>
</el-dialog>
 </el-main>
 </el-container>
    </div>
</template>


<script>
export default {
    data(){
        return {
            dialogVisible:false,
            //获取课程列表
            queryInfo:{
                id: '',
               
            },
   
          tableData:[],
          detailData:[],
        total: 0
        }
    },
    created(){
        this.gettableData(),
        this.getdetailData()
    },
    methods:{
         async gettableData(){
            const {data:res} = await this.axios.get('/api/get_course_id',{params: this.queryInfo})
         
            this.tableData = res.data
            this.total = res.data.total
          
        },
        async checkbiaozhun(e){
           this.dialogVisible=true
         const{data:res}=await this.axios.get('/api/get_course_inf', {
    params: {
        
        cid:e,
       
     
    } })
      this.detailData=res.data
      console.log(res.data) },
      exportToExcel() {
          //excel数据导出
         require.ensure([], () => {
           const {
             export_json_to_excel
           } = require('../../assets/js/Export2Excel');
           const tHeader = ['指标点id','课程目标id', '评价内容', '分值'];
           const filterVal = ['id','cpid', 'content', 'weight'];
           const list = this.detailData;
           const data = this.formatJson(filterVal, list);
           export_json_to_excel(tHeader, data, '评价准则');
         })
       },
       formatJson(filterVal, jsonData) {
         return jsonData.map(v => filterVal.map(j => v[j]))
       },

    }
}
</script>


<style lang="less" scoped>
.el-card{
    margin-top: 15px;
    margin-left: 10px;
}
.el-table{
    margin-top: 15px;
}
</style>