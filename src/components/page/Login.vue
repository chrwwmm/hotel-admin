<template>
    <div class="login-layout">   
        <h1>亿慧云后台管理系统</h1>    
        <div class="login-container">
            <div class="login-title">用户登录</div>
            <div class="field username-field">
                <label for=""></label>
                <input type="text" placeholder="请输入用户名" name="username">
            </div>
            <div class="field pwd-field">
                <label for=""></label>
                <input type="text" placeholder="请输入密码" name="password">
            </div>
            <div class="login-submit">
                <button id="login_btn" @click="submitForm">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {}
        },
        methods: {
            submitForm() {
                const self = this;
                self.$router.push('/index');
            }
        }
    }
</script>
<style scoped lang="less">
    /*============== login.html start ==============*/
    .login-layout{
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../../static/img/bg.png); 
        background-repeat: no-repeat; 
        h1{ 
            font-size: 34px; 
            color: #ECEEFA; 
            position: absolute; 
            top: 28px; 
            left: 148px;
        }
        .login-container{ 
            width: 390px;
            box-sizing: border-box;
            padding: 50px 50px 50px; 
            position: absolute; 
            top: 250px; 
            right: 220px; 
            background: rgba(0,0,0,0.3);
            .login-title{ 
                width: 290px; 
                height: 25px; 
                line-height: 25px; 
                font-size: 24px; 
                text-align: center; 
                color: #ECEEFA; 
                margin-top: 6px; 
                padding-bottom: 68px; 
            }
            .field{
                margin-top: 20px; 
                position: relative;
                label{ 
                    display: block; 
                    width: 40px; 
                    height: 40px; 
                    line-height: 40px; 
                    color: #fff; 
                    background: #ECEEFA; 
                    text-align: center; 
                    position: absolute; 
                    top: 1px;
                    left: 1px;
                }
                input{ 
                    width: 230px; 
                    height: 18px; 
                    font-size: 14px; 
                    line-height: 18px; 
                    padding: 11px 8px 11px 50px; 
                    border: 1px solid #ddd; 
                    box-sizing: content-box; 
                    background: #ECEEFA;
                }
                input::input-placeholder{ 
                    color: #A1A1A1; 
                    font-size: 18px;
                }
            }
            .username-field{
                label{ 
                    background-image:url(../../../static/img/username.png); 
                    background-repeat:no-repeat;
                }
            }
            .pwd-field{
                label{ 
                    background-image:url(../../../static/img/password.png); 
                    background-repeat:no-repeat;
                }
            }
            .login-submit{ 
                margin-top: 90px; 
                margin-bottom: 30px;
                button{ 
                    width: 290px; 
                    height: 42px; 
                    border: 0; 
                    font-size: 16px; 
                    color: #ECEEFA;  
                    background: #25334D;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
    }
    /*============== login.html end ==============*/
</style>