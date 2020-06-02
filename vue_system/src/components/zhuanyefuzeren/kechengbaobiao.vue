<template>
      <el-container>
    
        <el-header>
            <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/zhuanyefuzeren' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>学生毕业要求达成度</el-breadcrumb-item>
  <el-breadcrumb-item>课程报表</el-breadcrumb-item>
</el-breadcrumb>  
                
   <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
  
  <el-form-item label="指标点">
    <el-select  v-model="formInline.zhibiaodian" placeholder="指标点编号">
      <el-option label="1001" value="1001"></el-option>
      <el-option label="1002" value="1002"></el-option>
      <el-option label="1003" value="1003"></el-option>
      
    </el-select>
  </el-form-item>

  <el-form-item>
    <el-button type="primary"  @click="gettableData">查询</el-button>
  </el-form-item>
  <el-form-item>
 <el-button type="primary"  @click="exportToExcel" >生成表格</el-button>
  </el-form-item>
</el-form>
</el-header>
<el-main>
   <el-table
       :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="cname"
        label="课程名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="avg"
        label="平均分"
        width="180">
      </el-table-column>
      <el-table-column
        prop="max"
        label="最高分"
         width="180">
      </el-table-column>
       <el-table-column
        prop="min"
        label="最低分"
         width="180">
      </el-table-column>
     
      
    
    </el-table>
    </el-main>
    </el-container>
</template>
<script>
export default {
     data() {
      return {
        formInline: {
        
          zhibiaodian: ''
        },
        tableData:[]
      }
    },

      created(){
        this.gettableData()
      },
      methods:{
        async gettableData(){
         const{data:res}=await this.axios.get('/api/getcourse2', {
    params: {
        
       
        gid:this.formInline.zhibiaodian,
     
    } })
      this.tableData=res.data
      console.log(res.data) },
        
          exportToExcel() {
          //excel数据导出
         require.ensure([], () => {
           const {
             export_json_to_excel
           } = require('../../assets/js/Export2Excel');
           const tHeader = ['课程','平均分', '最高分', '最低分'];
           const filterVal = ['cname','avg', 'max', 'min'];
           const list = this.tableData;
           const data = this.formatJson(filterVal, list);
           export_json_to_excel(tHeader, data, '课程报表');
         })
       },
       formatJson(filterVal, jsonData) {
         return jsonData.map(v => filterVal.map(j => v[j]))
       },

      
      }


}

</script>
<style scoped>
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>