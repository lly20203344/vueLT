<template>
  <div class="head" :style="{backgroundColor:bgCol}">
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
</template>
<script>
  export default{
    data(){
      return {
        bgCol:"",
      }
    },
    components:{
    },
    methods: {
      bgStart(){
         this.bgCol='#000'
      },
      bgEnd(){
         this.bgCol=''
      }

    },
   mounted() {
      var root = process.env.BASE_API
      console.log(root, 'ppp')
    this.$nextTick(()=>{
      let self=this
      window.onscroll = function() {
        var headerMain = document.getElementsByClassName('head');
        if(window.pageYOffset >= 100){
          self.bgStart()
        } else {
           self.bgEnd()
        }
      }
    })
  }
  }
</script>
<style scoped>
.header-main.headerMain-bg{
      background: #fff;
      color: #333;
}
.header-main{
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      max-width: 1320px;
      height: 4.375em;
      margin: auto 0;
      padding: 0 2.4em;
      box-sizing: border-box;
}
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
    background: none;
    transition: all 0.5s ease 0s;
    /* background-color:rgba(0,0,0,0.3); */
  }
.headBox {
  width: 69%;
  color: #fff;
  margin: 0 auto;
}
.head:hover{
  background-color:#000;
}

.headnav{
  display: inline;
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
  height: 40px;
  width: 40px;
  align-items: center;
  border-radius: 50%;
}
</style>
