<template>
  <div class="detailPage">
    <a @click="goBack()">返回</a>
    <h1>This is {{pageNumber}} detail page</h1>
    <div>
      <div><img :src="items.url" width="100%" height="100%"/></div>
      <label>
          <h5 class="product-name">{{items.product_name}}</h5>
          <b class="discount" >{{items.discount_price}}</b>
          <span class="price-text">{{items.sale_price}}</span>
        </label>
    </div>
      
  </div>
</template>
<style>
.detailPage{
  text-align:center;
}
.detailPage a{
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: rgb(241, 231, 139);
  font-size: 1em;
  text-align: center;
  border-radius: 50%;
  
}
</style>
<script>



export default {
  name: 'Detail',
  data(){
    return{
      pageNumber:0,
      items:[]
    }
  },
  mounted:function(){
  this.pageNumber=this.$route.params.pageNumber;
  console.log(this.$route);
  this.getDetail()
},
methods:{
  goBack(){
    this.$router.push('/home')
  },
  getDetail(){
    this.$http.get('/home/detail.php?aa='+this.pageNumber).then(res=>{
      
      console.log(res);
      this.items=res.data;
      console.log(res.data);
    })
  }
}

}
</script>
