<template>
      <el-container>
    
        <el-header>
         
        
                <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/zhuanyefuzeren' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a>课程评价值管理</a></el-breadcrumb-item>

</el-breadcrumb>

   <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
  
  <el-form-item label="课程">
    <el-select  v-model="formInline.course" placeholder="请选择课程">
      <el-option label="全部" value="0"></el-option>
      <el-option label="软件测试" value="1"></el-option>
      <el-option label="线性代数" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="毕业要求">
    <el-select  v-model="formInline.biyeyaoqiu" placeholder="毕业要求">
       <el-option label="全部" value="0"></el-option>
      <el-option label="毕业要求一" value="1"></el-option>
      <el-option label="毕业要求二" value="2"></el-option>
       <el-option label="毕业要求三" value="3"></el-option>
   
      
    </el-select>
  </el-form-item>
  <el-form-item label="指标点">
    <el-select  v-model="formInline.zhibiaodian" placeholder="指标点编号">
       <el-option label="全部" value="0"></el-option>
      <el-option label="1" value="1001"></el-option>
      <el-option label="2" value="2"></el-option>
      <el-option label="3" value="3"></el-option>
      
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
        label="毕业要求"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gid"
        label="指标点"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cid"
        label="课程编号"
         width="180">
      </el-table-column>
       <el-table-column
        prop="cname"
        label="课程名称"
         width="180">
      </el-table-column>
       <el-table-column
        prop="weight"
        label="权重"
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
          biyeyaoqiu:'',
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
         const{data:res}=await this.axios.get('/api/check_mat', {
    params: {
        
        ggid:this.formInline.biyeyaoqiu,
        cid:this.formInline.course,
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