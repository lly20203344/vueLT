<template>
  <div class="index">
    <div class="banner-wapper">
    </div>
    <div class="section">
      <div style="width: 70%;height: 100%;margin:0 auto;">
        <el-row style="padding-top:100px;">
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Concise and simple</h2>
                <img class="temp-img" src="../../assets/img/1.jpg"/>

                <p class="temp-word">
                  Chinese rhetorical style is mainly reflected in the following ways: robust and tender,
                  concise and detailed, complicated and charming and plain, lucid and lively and reserved
                </p>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Beautiful and generous</h2>
                <img class="temp-img" src="../../assets/img/2.jpg"/>
                <p class="temp-word">
                  Its modern, fashion, artistic, natural and practical design ingeniously embellishes and grows artistic life taste,
                  designed is beautiful and generous on appearance.
                </p>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Open source free</h2>
                <img class="temp-img" src="../../assets/img/3.jpg"/>
                <p class="temp-word">
                  Bottom line, the Extension Manager and the Visual Studio Gallery offer excellent support for
                  open source and free extension projects
                </p>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/img/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
           <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/img/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
           <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/img/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
           <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/img/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
           <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/img/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
           <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/img/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    components: {
    },
    name: '',
    data(){
      return {
      }
    },
    methods: {},
    created(){
      // this.height = $(window).height() + 'px';

    }
  }
</script>
<style scoped>
  .index {
    padding: 0px;
    height: 100%;
    width: 100%;
    margin: 0px;
    background: #ffffff;
    overflow: hidden;

  }

  .section {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    position: relative;

  }

  .temp {
    height: 100%;
    margin: 10px;
    padding: 0px;
  }

  .section1 {
    background-image: url(../../assets/img/homebg.png);
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center; /*指定垂直居中*/
  }

  .content {
    color: #eeeeee;
    width: 100%;
    height: 300px;
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    /*font-family:Lato, sans-serif;*/
  }

  /*  .body-style="{ padding: '0px' }"*/

  .toLink {

    font-size: 20px;
    border: 1px solid;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  .toLink:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .temp-img {
    width: 94%;
    height: 235px;
    margin-left: 3%;
  }

  .temp-word {
    height: 70px;
  }

  h2 {
    text-align: center;
  }

  .end {
    background: #303133;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #ccc;
    font-size: 28px;

  }

  .banner-wapper{
    width: 100%;
    height: 640px;
    background: url(https://dct-test.oss-cn-beijing.aliyuncs.com/dctpc/assets/img/index/index_bg.jpg) no-repeat center 0;
    background-size: cover;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
