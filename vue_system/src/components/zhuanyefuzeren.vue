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
       <el-menu-item index="1">
        <i class="el-icon-user"></i>
        <span slot="title">个人基本信息</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>管理评价标准</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="setjuzhen">设置课程支撑矩阵</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <el-menu-item index="chaxunjuzhen">查询矩阵</el-menu-item>
        </el-menu-item-group>
        
        
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>学生毕业要求达成度</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="banjibaobiao">综合查询</el-menu-item>
         
          <el-menu-item index="3-2">学业预警</el-menu-item>
        
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
    background-color:#EAEDF1;
}
.el-breadcrumb{
  margin-left: 75px;
  margin-top: 20px;
}

</style>