<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像-->
        <div class="avatar_box">
            <img src="../assets/logo3.jpg" alt="">
        </div>
        <!--登陆表单-->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--username-->
  <el-form-item prop="username">
    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
  </el-form-item>
  <!--password-->
    <el-form-item prop="password">
    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
  </el-form-item>
  <!--button-->
    <el-form-item class='btns'>
   <el-button type="primary" @click="login">确认</el-button>
   <el-button type="info">忘记密码</el-button>
  </el-form-item>
        </el-form>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //这是登陆表单的数据绑定对象
            loginForm:{
                username:'zs',
                password:'123'
            },
            //这是表单的验证对象
            loginFormRules:{
                //验证用户名是否合法
                username:[{
                    required: true,message:"请输入登陆账号",trigger:"blur"}
                    ],
                //验证密码是否合法
                password:[{
                    required: true,message:"请输入登陆密码",trigger:"blur"}]
            }
        }
    },
    methods:{
        //resetLoginForm()
        login(){
            this.$refs.loginFormRef.validate(async valid => {
                const result=await this.$http.post('api/login',this.loginForm.username);
                console.log(result);
            })
        }

    }
    
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height:100%;
}

.login_box{
    width:450px;
    height: 300px;
    background-color:#fff;
    border-radius: 3px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);

    .avatar_box{
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
        img{
            width:100%;
            height: 100%;
            border-radius: 30%;
            background-color: #eee;
        }

        }
        .login_form{
            position:absolute;
            bottom:0;
            width:100%;
            padding:0 20px;
            box-sizing:border-box;
        }
        .btns{
            display:flex;
            justify-content: flex-end;
        }
}
</style>