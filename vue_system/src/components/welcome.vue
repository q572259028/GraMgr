<template>
  <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <div>
        <img :src="item.idView" alt=""></div>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default{
    data(){
      return {
        imagebox:[{id:1,idView:"../assets/1.jpg"},
        {id:2,idView:"../assets/2.jpg"},
        {id:3,idView:"../assets/3.jpg"},
        {id:4,idView:"../assets/4.jpg"}
        //imagebox是assets下一个放图片的文件夹
        ]
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>

<style>
   .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
        .div{
        height: 130px;
        width:130px;
        border:1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow:0 0 10px #ddd;
        position: absolute;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
    }
    .img{
            width:100%;
            height: 100%;
            border-radius: 30%;
            background-color: #eee;
        }
</style>