<template>
      <el-container>
    
        <el-header>
                 <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/kechengfuzeren' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>已审核的课程评价</el-breadcrumb-item>
  <el-breadcrumb-item>已通过审核评价</el-breadcrumb-item>
</el-breadcrumb>      
   <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
  
  <el-form-item label="课程">
    <el-select  v-model="formInline.course" placeholder="请选择课程">
      <el-option label="软件测试" value="1"></el-option>
      <el-option label="线性代数" value="2"></el-option>
      <el-option label="微积分" value="3"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="指标点">
    <el-select  v-model="formInline.zhibiaodian" placeholder="指标点编号">
      <el-option label="1001" value="1001"></el-option>
      <el-option label="1002" value="2001"></el-option>
      <el-option label="1003" value="1003"></el-option>
      
    </el-select>
  </el-form-item>
  <el-form-item label="班级">
    <el-select  v-model="formInline.class" placeholder="请选择班级">
      <el-option label="软工一班" value="1"></el-option>
      <el-option label="软工二班" value="2"></el-option>
      <el-option label="软工三班" value="3"></el-option>
      
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
       <el-table-column label="操作" width="100px">
           <template slot-scope="shuju" >
            <el-button type="danger"    @click="fail(shuju.row.id)"> 
              不通过
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
      return {
        formInline: {
          course: '',
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
         const{data:res}=await this.axios.get('/api/getinf_class', {
    params: {
         classid: this.formInline.class,
        cid:this.formInline.course,
        gid:this.formInline.zhibiaodian,
        state:'1',
    } })
      this.tableData=res.data
      console.log(res.data) },
         async fail(e){
         const{data:res}=await this.axios.get('/api/changestatus', {
    params: {
        sid:e,
        classid: this.formInline.class,
        cid:this.formInline.course,
        gid:this.formInline.zhibiaodian,
        state:'2',
    } })
     if(res.data==2){
      console.log(res.data)
     
        this.$message('成功更改 ');
     
      }
        }
        }
      



}

</script>

<style scoped>
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>