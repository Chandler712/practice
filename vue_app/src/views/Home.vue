<template>
  <div class="home">
    <!-- NavHeader 顶部导航-->
    <!-- <div class="category" v-for="(list,i) in lists" :key="i">
      <i class="iconfont" :class="list.icon" :style='{background:list.color}'></i>
      <span>{{list.title}}</span>
    </div> -->
     <NavHeader /> 
    <!-- Banner 图片轮播-->
   <!--  <div class="banner">
      <img alt="img" v-for="(img,i) in imgArr" :key="i" :src="img" v-show="n==i">
      <div class="banner-circle">
        <ul>
          <li v-for="(img,i) in imgArr" :key="i" :class="n==i ?'selected': ''">
            {{i+1}}
          </li>
        </ul>
            
      </div>
    </div> -->
    <Banner :imgArr="imgArr"/>
    <!-- 列表展示 -->
    <div class="product-list">
      <ul>
        <li class="lists" v-for="item in items" :key="item.product_id">
        <router-link :to="'/detail/'+item.product_id">
          <img :src="item.url" width="150px" height="150px"/>
        </router-link>
        <label>
          <h5 class="product-name">{{item.product_name}}</h5>
          <b class="discount">{{item.discount_price}}</b>
          <span class="price-text">{{item.sale_price}}</span>
        </label>
        </li>
      </ul>

    </div>
  </div>
</template>
<style>
</style>
<script>
//import axios from 'axios';
import Banner from '../components/Banner.vue';
import NavHeader from '../components/NavHeader.vue';

export default {
  name: 'Home',
  components:{
    NavHeader,
    Banner,
    },
    data(){
    return{
      timer:null,
      n:0,
      /* lists:[
      {title:'住宿',icon:'icon-listzhusu',color:'#FFEC8B'},
      {title:'美食',icon:'icon-meishi1',color:'#D2691E'},
      {title:'出行',icon:'icon-chuchalvyouchuxing',color:'#FFEC8B'},
      {title:'休闲',icon:'icon-xiuxian',color:'#A4D3EE'},
      {title:'购物',icon:'icon-icon-test3',color:'#EE3B3B'},
      {title:'住宿',icon:'icon-listzhusu',color:'#FFEC8B'},
      {title:'美食',icon:'icon-meishi1',color:'#D2691E'},
      {title:'更多',icon:'icon-more',color:'#EE3B3B'}
    ], */
    imgArr:[
      require('../assets/img/img1.jpeg'),//路径需要加require
      require('../assets/img/img2.jpeg'),
      require('../assets/img/img3.jpg'),
      require('../assets/img/img4.jpg'),
    ],
    items:[]
    /*
    }
  },
  methods:{
    play(){
      this.timer=setInterval(this.autoPlay,2000)
  },
  autoPlay(){
    this.n++;
    if(this.n==this.imgArr.length){
      this.n=0;
    }
  } 
  },
  mounted:function(){ //钩子函数，生命周期 挂载完成
    this.play();
  },
  destroyed:function(){ //销毁
    clearInterval(this.timer);
  },
  */
}
},
methods:{
  getList(){
    this.$http.get('/home/index.php').then(res=>{
      
      console.log(res);
      this.items=res.data;
      console.log(res.data);
    })
  }
},
mounted:function(){
  this.getList();
}
}

</script>
