<template>
   <div class="product-list">
      <ul>
        <li class="lists" v-for="item in items" :key="item.product_id">
        <router-link :to="'/detail/'+item.product_id">
          <img :src="item.url" width="162px" height="162px"/>
        </router-link>
        <label>
          <h5 class="product-name">{{item.product_name}}</h5>
          <b class="discount" width="50px" height="50px">{{item.discount_price}}</b>
          <span class="price-text">{{item.sale_price}}</span>
        </label>
        </li>
      </ul>

    </div>
</template>

<script>
export default {
  name: 'ProductList',
  data(){
    
    return{
      
      items:[]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
