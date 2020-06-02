<template>
      <el-container>
    
        <el-header>
             <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/zhuanyefuzeren' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>学生毕业要求达成度</el-breadcrumb-item>
  <el-breadcrumb-item>综合查询</el-breadcrumb-item>
</el-breadcrumb>   
   <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
  
  <el-form-item label="年级">
    <el-select  v-model="formInline.grade" placeholder="年级">
      <el-option label="all" value="0"></el-option>
      <el-option label="2017" value="2017"></el-option>
      <el-option label="2018" value="2018"></el-option>
      
      
    </el-select>
  </el-form-item>
  <el-form-item label="班级">
    <el-select  v-model="formInline.class" placeholder="班级">
      <el-option label="all" value="0"></el-option>
      <el-option label="软工一班" value="1"></el-option>
      <el-option label="班级二班" value="2"></el-option>
      
      
    </el-select>
  </el-form-item>
  
  <el-form-item label="课程">
    <el-select  v-model="formInline.course" placeholder="课程">
      <el-option label="all" value="0"></el-option>
      <el-option label="软件测试" value="1"></el-option>
      <el-option label="线性代数" value="2"></el-option>
      <el-option label="微积分" value="3"></el-option>
      
      
    </el-select>
  </el-form-item>
  <el-form-item label="指标点">
    <el-select  v-model="formInline.zhibiaodian" placeholder="指标点编号">
      <el-option label="all" value="0"></el-option>
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
        prop="grade"
        label="年级"
        width="100px">
      </el-table-column>
       <el-table-column
        prop="classid"
        label="班级编号"
        width="100px">
      </el-table-column>
       <el-table-column
        prop="classname"
        label="班级名"
        width="100px">
      </el-table-column>
       <el-table-column
        prop="cid"
        label="课程编号"
        width="100px">
      </el-table-column>
       <el-table-column
        prop="cname"
        label="课程名称"
        width="100px">
      </el-table-column>
        <el-table-column
        prop="gid"
        label="指标点编号"
        width="100px">
      </el-table-column>

      <el-table-column
        prop="avg"
        label="平均分"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="max"
        label="最高分"
         width="80px">
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
         const{data:res}=await this.axios.get('/api/get_all', {
    params: {
        
       grade:this.formInline.grade,
       classid:this.formInline.class,
       cid:this.formInline.course,
        gid:this.formInline.zhibiaodian,
     
    } })
      this.tableData=res.data
      console.log(res.data)
        },
        exportToExcel() {
          //excel数据导出
         require.ensure([], () => {
           const {
             export_json_to_excel
           } = require('../../assets/js/Export2Excel');
           const tHeader = ['班级','平均分', '最高分', '最低分'];
           const filterVal = ['classid','avg', 'max', 'min'];
           const list = this.tableData;
           const data = this.formatJson(filterVal, list);
           export_json_to_excel(tHeader, data, '班级报表');
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