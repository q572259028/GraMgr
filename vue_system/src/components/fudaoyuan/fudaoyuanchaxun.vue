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
      active-text-color="#ffd04b">
       <el-menu-item index="1">
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
          <el-menu-item index="1-1">查询学生毕业达成度</el-menu-item>
          <el-menu-item index="1-1">学业预警</el-menu-item>
        </el-menu-item-group>
        
        
      </el-submenu>
      
      
    </el-menu>
    </el-aside>
    <!--右侧内容主体-->
    <el-main>
        <!--面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生毕业要求达成度</el-breadcrumb-item>
            <el-breadcrumb-item>查询学生毕业要求达成度</el-breadcrumb-item>
        </el-breadcrumb>

        <!--卡片视图区-->
        <el-card>
            <!--选择课程-->
            <el-row class>
                <el-col>
                    <span>课程： </span>
                    <!--选择框-->
                    <el-select placeholder="请选择">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>

                </el-col>
            </el-row>

            <!--选择班级-->
            <el-row class>
                <el-col>
                    <span>班级： </span>
                    <!--选择框-->
                    <el-select placeholder="请选择">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>

                </el-col>
            </el-row>

            <!--选择指标点编号-->
            <el-row class>
                <el-col>
                    <span>指标点编号： </span>
                    <!--选择框-->
                    <el-select placeholder="请选择">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>

                </el-col>
            </el-row>

            <!--查询button-->
            <el-button type="primary" round>查询</el-button>


            <el-table stripe border>

                <el-table-column label></el-table-column>
                <el-table-column label></el-table-column>
                <el-table-column label></el-table-column>
                <el-table-column label></el-table-column>
            </el-table>
        </el-card>


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


</style>