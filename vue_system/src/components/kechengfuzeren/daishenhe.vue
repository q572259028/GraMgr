<template>
      <el-container>
    
        <el-header>
               <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/kechengfuzeren' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>待审核的课程评价</el-breadcrumb-item>
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
      <el-option label="1002" value="1002"></el-option>
      <el-option label="1003" value="1003"></el-option>
      
    </el-select>
  </el-form-item>

  <el-form-item>
    <el-button type="primary"  @click="gettableData">查询</el-button>
  </el-form-item>
   <el-form-item>
    
    <el-button type="success"  @click="drawLine()">生成图表</el-button>
     
  </el-form-item>
     <el-form-item>
    
    <el-button type="success"  @click="exportToExcel()">下载报表</el-button>
     
  </el-form-item>
</el-form>
</el-header>
<el-main>
   <el-table
       :data="tableData"
      style="width: 100%">
      
      <el-table-column
        prop="classid"
        label="班级编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="teachername"
        label="教师姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="avg"
        label="平均值"
         width="180">
      </el-table-column>
      <el-table-column
        prop="max"
        label="最高值"
         width="180">
      </el-table-column>
      <el-table-column
        prop="min"
        label="最低值"
         width="180">
      </el-table-column>
      <el-table-column>
        
        <el-button type="success">审核</el-button>
      </el-table-column>
      
    
    </el-table>
       <div id='myChart' style='width：200px;height:250px' :data="tableData">
</div> 
    </el-main>
    </el-container>
    
</template>
<script>
export default {
  name : 'hello',
     data() {
      return {
        formInline: {
          course: '',
          zhibiaodian: '',
          
        },
        msg: 'Welcome to Your Vue.js App',
        tableData:[]
      }
    },

      created(){
        this.gettableData()
        this.drawLine()
      },
       //mounted(){
      //this.drawLine();
// },
      methods:{
        async gettableData(){
         const{data:res}=await this.axios.get('/api/getcourse_class', {
    params: {
        
        cid:this.formInline.course,
        gid:this.formInline.zhibiaodian,
     
    } })
      this.tableData=res.data
      console.log(res.data) },
       async drawLine(a,b,c){
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption({
      title: { text: '一班柱状图' },
      tooltip: {},
      xAxis: {
        data: ["平均值","最高值","最低值"]
      },
      yAxis: {},
      series: [{
        name: '分数',
        type: 'bar',
        data: [0.825,0.94,0.71]         //将数据传过来  这里我随便写了几个数
      }]
    });
  },
      exportToExcel() {
          //excel数据导出
         require.ensure([], () => {
           const {
             export_json_to_excel
           } = require('../../assets/js/Export2Excel');
           const tHeader = ['班级编号','教师姓名','平均分', '最高分', '最低分'];
           const filterVal = ['classid','teachername','avg', 'max', 'min'];
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
<style  scoped>
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>