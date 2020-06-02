<template>
    <div>
        <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/renkejiaoshi' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a>上传成绩</a></el-breadcrumb-item>

</el-breadcrumb>
 <input type="file" class="file">
 <button type="primary" @click="submit">submit</button>
    </div>
</template>
<script>

export default {
    methods:{
     async submit(){
        
         const{data:res}=await this.axios.get('/api/testexcel3')
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