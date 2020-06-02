<template>
    <el-container>
    
        <el-header>

   <el-form  ref="formOptionRef" :inline="true"  :model="formOption" class="demo-form-inline">
  
  <el-form-item label="课程">
    <el-select  :v-model="formOption.course"   placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.cname"
      :label="item.cname"
      :value="item.cname">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="班级">
    <el-select :v-model="formOption.class"  placeholder="请选择班级">
      <el-option label="软工一班" value="软工一班"></el-option>
      <el-option label="软工二班" value="软工二班"></el-option>
      <el-option label="软工三班" value="class3"></el-option>
      <el-option label="软工四班" value="class4"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="指标点编号">
    <el-select  :v-model="formOption.zhibiaodian" placeholder="请选择指标点编号">
      <el-option label="10001" value="1"></el-option>
      <el-option label="10002" value="2"></el-option>
      <el-option label="10003" value="3"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="gettableData">查询</el-button>
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
     
      
    <el-table-column label="操作">
     <template >

         <el-button type="primary" icon="el-icon-edit">

         </el-button>
     </template>

        
    
    </el-table-column>
    </el-table>
    </el-main>
    </el-container>
</template>
<script>
 export default {
      data() {
      return {formOption:{
          course:'',
          class:'',
          zhibiaodian:''
      },
          options:[
              
          ],
        tableData: []}},
    created(){
      this.getdataCourse(),
      this.gettableData()
      },
      methods:{
       async getdataCourse(){
       const{data:res}=await this.axios.get('/api/get_course_id', {
    params: {
        //老师id
id:'20002'
        
    } })
    this.options=res.data

      },

      async gettableData(){
       const{data:res}=await this.axios.get('/api/get_student', {
    params: {
        //老师id
classname:this.formOption.class,
cname:this.formOption.course,
gid:this.formOption.zhibiaodian

        
    } })
    this.tableData=res.data
 console.log(res.data)
      }
    }
        
    
  }
</script>