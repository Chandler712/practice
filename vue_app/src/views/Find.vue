<template>
  <div class="find">

    <h1>This is find page</h1>
    <Banner :imgArr="findImgArr"/>
  </div>
</template>
<style>
div h1{
  margin:0;
  padding:0;
}
.find{
  text-align:center;
}
</style>
<script>

import Banner from '../components/Banner.vue'

export default {
  name: 'Find',
  
  components:{
    Banner,
  },
  data(){
    return{
    findImgArr:[
      require('../assets/img/img5.jpg'),
      require('../assets/img/img6.jpg'),
      require('../assets/img/img7.jpg'),
      require('../assets/img/img8.jpg'),
    ],
    }
  },
  
}
</script>
