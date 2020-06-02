<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/zhuanyefuzeren' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>管理评价标准</el-breadcrumb-item>
  <el-breadcrumb-item>设置课程支撑矩阵</el-breadcrumb-item>
</el-breadcrumb>  
 <input type="file" class="file">
 <button type="primary" @click="submit">submit</button>
    </div>
</template>
<script>

export default {
    methods:{
     async submit(){
        
         const{data:res}=await this.axios.get('/api/testexcel2')
         console.log(res)

    }
    }
}
</script>

<style scoped>
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>