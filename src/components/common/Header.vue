<template>
    <div class="header">
        <div class="logo">
            <img src="../../../static/img/logo.png" alt="">
            <span>YIHUIYUN</span>
        </div>
        <div class="header-title">亿慧云后台管理系统</div>
        <div class="header-right">
            <div class="welcome">欢迎您！亿慧云管理员！</div>
            <div class="time">
                <span>2018年1月23日&nbsp;</span>
                <span>星期二&nbsp;</span>
                <span>15时11分30秒</span>
            </div>  
        </div>  
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'yhy'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 16px;
        line-height: 60px;
        color: #fff;
        background-color: #373D41;
    }    
    .header .logo{
        width: 220px;
        float: left;
        position: relative;
        /* padding-left: 25px; */
        background-image: url(../../../static/img/logo-bg.png);
        background-position: 33% 50%;
        background-repeat: no-repeat;
        border-right: 2px solid #000;
    }
    .header .logo img{
        position: absolute;
        top: 10px;
        left: 25px;
    }
    .header .logo span{
        margin-left: 100px;
    }
    .header-title{
        float: left;
        margin-left: 38px;
    }
    .header-right{
        float: right;
    }
    .welcome{
        float: left;
        padding-right: 30px;
        border-right: 2px solid #2D3336;
    }
    .time{
        float: left;
        padding-left: 25px;
        padding-right: 25px;
    }
</style>
