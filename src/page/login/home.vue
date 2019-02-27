<template>

<div style="height: 100%">
  <div class="head">
    <div class="headBox">
      <el-row :gutter="20">
        <el-col :span="4"><div class="logo"><img src="../../assets/img/logo.svg" class="head-logo"/></div></el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <ul class="headnav">
              <router-link to="/index"  tag="li">首页</router-link>
              <router-link to="/toLogin"  tag="li">项目</router-link>
              <router-link to="/index"  tag="li">新闻</router-link>
              <router-link to="/toLogin"  tag="li">关于</router-link>
              <router-link to="/index"  tag="li">APP</router-link>
              <router-link to="/toLogin"   tag="li">去登录</router-link>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="logo">
            <img src="../../assets/img/homebg.png" class="avatarImg"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div style="height: 100%">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</div>

</template>
<script>
  export default{
    name: '',
    data(){
      return {

      }
    },
    methods: {


    },
    mounted(){
        $(".headnav>li").click(function () {
          //切换动画  
          $(this).addClass("li-active").siblings("li").removeClass("li-active");
        });
    }

  }
</script>
<style scoped>
    li{
      display: inline;
      color: #f5f7fa;
      padding: 38px;
      margin: 0px;
      font-size: 18px;
      cursor: pointer;
      font-family:Lato, sans-serif;
      font-weight: 500;
    }
    .li-active{
      color: #f5f7fa;
      border-bottom: 2px solid #f5f7fa;
    }
    li:hover{
      color: #f5f7fa;
      border-bottom: 2px solid #f5f7fa;
    }
  .head{
    position: fixed;
    width: 100%;
    display: block;
    height: 100px;
    z-index: 99;
    line-height: 100px;
    background-color:rgba(0,0,0,0.3); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
  }
.headBox {
  width: 69%;
  color: #fff;
  margin: 0 auto;
}
.head:hover{
  background-color:rgba(58,142,230);
}

.headnav{
  display: inline;
  height: 60px;
  margin-top: 20px;
  margin-right: 80px;
  line-height: 60px;
}

  h2 {

    text-align: center;
    color: #409eff;
    letter-spacing: 2px;
    font-size: 40px;
    font-weight: 100;
  }
h3{

  display: inline;
  color: #f5f7fa;
  margin-left: 10px;
  cursor: pointer;
  letter-spacing: 1px;
  font-family:Lato, sans-serif;

}

.logo {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center
}
.head-logo{
  height: 50px;
  width: 150px;
  align-items: center;
  cursor: pointer;
}

.avatarImg {
  height: 80px;
  width: 80px;
  align-items: center;
  border-radius: 50%;
}


</style>
