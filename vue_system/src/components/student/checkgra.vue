<template>
    <div>
        <el-table
      :data="tableData"
       :span-method="objectSpanMethod"
      style="width: 100%">
      <el-table-column
        prop="sid"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gid"
        label="指标点编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="context"
        label="指标点内容"
         width="180">
      </el-table-column>
     <el-table-column
        prop="grade"
        label="指标点成绩"
         >
        
      </el-table-column>
      <el-table-column label="操作">
      ><template  >
     <el-button type="primary" @click="dialogVisible = true">查看详情</el-button>
     
      </template>

     </el-table-column>
    </el-table>

  
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

    </div>
</template>

<script>
export default {
    
data() {
        return {
             dialogVisible: false,
          
          tableData: []
        }
      },
      created(){
        this.gettableData()
      },
      methods:{

         handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {})},
        async gettableData(){
         const{data:res}=await this.axios.get('/api/checkgra', {
    params: {
        
        id:'10001'
    } })
      this.tableData=res.data
      console.log(this.tableData) },
    

          async showDetails(e,f){
         const{data:res}=await this.axios.get('/api/get_gg3', {
    params: {
        
        sid:e,
        ggid:f,
        
    } })
     // this.tableData=res.data
      console.log(res.data) }
      }

        
      






    
}
</script>
<style lang="less" scoped>
</style>