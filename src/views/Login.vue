<template>
  <div class="login">
    <h1 class="title">欢迎登陆宝洁SFA系统</h1>
    <div class="login-con-wrap">
      <div class="login-con-hat"></div>
      <div class="login-main-con">
        <div class="logo-wrap">
          <div class="logo"></div>
        </div>
        <div class="login-input-group">
          <div
            class="login-input-field"
            :class="{
              active: activeField === 'comCode',
              error: errors.has('comCode')
            }"
          >
            <label for="comCode">公司编码:</label>
            <input
              type="number"
              id="comCode"
              v-model="comCode"
              @focus="activeField = 'comCode'"
              name="comCode"
              v-validate="{ required: true, max: 6, min: 4 }"
            />
          </div>
          <div
            class="login-input-field"
            :class="{
              active: activeField === 'empNum',
              error: errors.has('empNum')
            }"
          >
            <label for="empNum">员工编号:</label>
            <input
              type="number"
              id="empNum"
              v-model="empNum"
              @focus="activeField = 'empNum'"
              name="empNum"
              v-validate="{ required: true, max: 12, min: 4 }"
            />
          </div>
          <div
            class="login-input-field"
            :class="{ active: activeField === 'pwd', error: errors.has('pwd') }"
          >
            <label for="pwd">登录密码:</label>
            <input
              type="password"
              id="pwd"
              v-model="pwd"
              @focus="activeField = 'pwd'"
              name="pwd"
              v-validate="{ required: true, max: 12, min: 4 }"
            />
          </div>
        </div>
        <div class="login-option-wrap">
          <div
            class="remember-pwd"
            :class="{ active: rememberPwd }"
            @click="selectRememPwd"
          >
            <i
              class="iconfont"
              :class="{
                iconFuxuankuangWeixuanzhong: !rememberPwd,
                iconFuxuankuangXuanzhong: rememberPwd
              }"
            ></i>
            <span>保存密码</span>
          </div>
          <div
            class="auto-login"
            :class="{ active: autoLogin }"
            @click="selectAutoLogin"
          >
            <i
              class="iconfont"
              :class="{
                iconFuxuankuangWeixuanzhong: !autoLogin,
                iconFuxuankuangXuanzhong: autoLogin
              }"
            ></i>
            <span>自动登录</span>
          </div>
        </div>
      </div>
    </div>
    <div @click="clickLogin" class="login-btn">
      <p>登录</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { Indicator } from "mint-ui";
import Service from "../service/index.js";
import "../assets/font/iconfont.css";
export default {
  name: "login",
  data() {
    return {
      comCode: "",
      empNum: "",
      pwd: "",
      activeField: "comCode",
      rememberPwd: false,
      autoLogin: false
    };
  },
  mounted() {
    const loginData = JSON.parse(localStorage.getItem("Login-data"));
    if (loginData) {
      this.comCode = loginData.comCode;
      this.empNum = loginData.empNum;
      this.pwd = loginData.pwd;
      this.rememberPwd = loginData.rememberPwd;
      this.autoLogin = loginData.autoLogin;
    }
    if (this.autoLogin) {
      this.$router.push("/home");
    }
  },
  methods: {
    selectRememPwd() {
      this.rememberPwd = !this.rememberPwd;
      this.rememberPwd || (this.autoLogin = false);
    },
    selectAutoLogin() {
      this.autoLogin = !this.autoLogin;
      this.rememberPwd || (this.rememberPwd = true);
    },
    clickLogin() {
      // alert("denglu");
      if (this.errors.any()) {
        // console.log("有错误");
        // alert("有错误");
        return;
      }
      // console.log("没有错误");
      Indicator.open("正在登录...");
      Service.login({
        comCode: this.comCode,
        empNum: this.empNum,
        pwd: this.pwd
      })
        .then(res => {
          if (res.data.code !== 1) {
            Indicator.close();
            return;
          }
          sessionStorage.setItem("login-token", res.data.token);
          Service.getUserData()
            .then(res => {
              Indicator.close();
              console.log(res.data);
              this.$router.push("/home");
              localStorage.setItem(
                "Login-data",
                JSON.stringify({
                  rememberPwd: this.rememberPwd,
                  autoLogin: this.autoLogin,
                  comCode: this.rememberPwd ? this.comCode : "",
                  empNum: this.rememberPwd ? this.empNum : "",
                  pwd: this.rememberPwd ? this.pwd : ""
                })
              );
              sessionStorage.setItem(
                "Login-user",
                JSON.stringify(res.data.data)
              );
              this.$store.commit("setLoginUser", res.data.data);
            })
            .catch(e => {
              alert("111" + e);
              console.log(e);
              Indicator.close();
            });
        })
        .catch(error => {
          alert("222" + error);
          console.log(error);
          Indicator.close();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2ade69 !important;
}
.title {
  color: #fff;
  font-size: px2rem(36);
  text-align: center;
  padding-top: px2rem(148-40-36);
}
.login-con-wrap {
  margin-top: px2rem(40);
  .login-con-hat {
    width: px2rem(537);
    height: px2rem(18);
    background-color: #eeeeee;
    margin: 0 auto;
    border-radius: px2rem(18) px2rem(18) 0 0;
  }
  .login-main-con {
    width: px2rem(600);
    height: px2rem(836);
    background-color: #fff;
    margin: 0 auto;
    border-radius: px2rem(14);
    .logo-wrap {
      height: px2rem(190);
      padding-top: px2rem(80);
      .logo {
        width: px2rem(190);
        height: px2rem(190);
        background-image: url(../assets/logo.png);
        background-size: cover;
        margin: 0 auto;
      }
    }
    .login-input-group {
      margin-top: px2rem(80);
      .login-input-field {
        width: px2rem(440);
        height: px2rem(90);
        line-height: px2rem(90);
        padding-left: px2rem(30);
        margin: 0 auto;
        font-size: px2rem(28);
        color: #757575;
        border: 2px solid #e2e2e2;
        border-radius: px2rem(40);
        margin-bottom: px2rem(30);
        input {
          width: px2rem(250);
          padding-left: px2rem(25);
          border: 0 none;
          outline: 0 none;
          font-size: px2rem(28);
        }
      }
    }
    .login-input-field.active {
      border: 2px solid #10903d;
      color: #10903d;
    }
    .login-input-field.error {
      border: 2px solid red;
      color: red;
    }
    .login-option-wrap {
      margin-top: px2rem(45);
      font-size: px2rem(24);
      color: #757575;
      span {
        margin-left: px2rem(15);
        letter-spacing: px2rem(2);
      }
      i.iconfont {
        font-size: px2rem(30);
      }
      .remember-pwd {
        display: inline-block;
        margin-left: px2rem(98);
      }
      .remember-pwd.active,
      .auto-login.active {
        color: #10903d;
      }
      .auto-login {
        display: inline-block;
        margin-left: px2rem(100);
      }
    }
  }
}
.login-btn {
  width: px2rem(600);
  height: px2rem(100);
  line-height: px2rem(100);
  text-align: center;
  margin: px2rem(20) auto 0;
  color: #10903d;
  background-color: #fff;
  font-size: px2rem(36);
  border-radius: px2rem(15);
  letter-spacing: px2rem(5);
}
</style>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  // background-color: #2ade69;
}
</style>
