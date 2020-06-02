<template>
    <!--head-->
    <el-container class="student-container">
  <el-header>
      <div>
          <img src="../assets/title.png" alt="" height="40px" width="150px">
          <span>
              毕业要求度查询系统
          </span>

      </div>
      </el-header>
  <!--页面main区域-->

  <el-container>
      <!--页面侧边栏-->
    <el-aside width="200px">
        <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b" router>
       <el-menu-item index="fupersonal">
        <i class="el-icon-user"></i>
        <span slot="title">个人基本信息</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>
              学生毕业要求达成度
          </span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="fdyclass">班级报表</el-menu-item>
          <el-menu-item index="fdynianji">年级报表</el-menu-item>
          <el-menu-item index="xueyeyujing">学业预警</el-menu-item>
        </el-menu-item-group>
        
        
      </el-submenu>
       <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">退出</el-breadcrumb-item>
      </el-breadcrumb>
      
      
    </el-menu>
    </el-aside>
    <!--右侧内容主体-->
    <el-main>
      <router-view>

      </router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>

.student-container{
    height:100% ;
}


.el-header{
    background-color: #373d41;
    display:flex;
    justify-content: space-between;
   color:#ffff;
   font-size: 20px;
   >div{
       display: flex;
       align-items: center;
   }
}
.el-aside{
    background-color: #333744;
}
.el-main{
    background-color: #EAEDF1;
}
.el-breadcrumb{
  margin-left: 75px;
  margin-top: 20px;
}

</style>