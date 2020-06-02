<template>
      <el-container>
    
        <el-header>
                <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/renkejiaoshi' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a>课程评价值管理</a></el-breadcrumb-item>

</el-breadcrumb>
   <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
  
  <el-form-item label="课程">
    <el-select  v-model="formInline.course" placeholder="请选择课程">
      <el-option label="软件测试" value="软件测试"></el-option>
      <el-option label="线性代数" value="线性代数"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="班级">
    <el-select  v-model="formInline.class" placeholder="班级">
      <el-option label="软工一班" value="软工一班"></el-option>
      <el-option label="软工二班" value="软工二班"></el-option>
   
      
    </el-select>
  </el-form-item>
  <el-form-item label="指标点">
    <el-select  v-model="formInline.zhibiaodian" placeholder="指标点编号">
      <el-option label="1001" value="1001"></el-option>
      <el-option label="2001" value="2001"></el-option>
      <el-option label="3001" value="3001"></el-option>
      
    </el-select>
  </el-form-item>

  <el-form-item>
    <el-button type="primary"  @click="gettableData">查询</el-button>
  </el-form-item>
 
</el-form>
</el-header>
<el-main>
   <el-table
       :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sname"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="评价值"
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
          course: '',
          class:'',
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
         const{data:res}=await this.axios.get('/api/get_student', {
    params: {
        
        classname:this.formInline.class,
        cname:this.formInline.course,
        gid:this.formInline.zhibiaodian,
    } })
      this.tableData=res.data
      console.log(res.data) }
        },

        
     
      

}

</script>

<style scoped>
.el-form{
  margin-top: 15;
}
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>