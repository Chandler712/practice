<template>
  <div class="detailPage">
    <a @click="goBack()">返回</a>
    <h1>This is {{pageNumber}} detail page</h1>
   
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
  background: red;
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
      pageNumber:0
    }
  },
  mounted:function(){
  this.pageNumber=this.$route.params.pageNumber;
  console.log(this.$route.params.pageNumber);
},
methods:{
  goBack(){
    this.$router.push('/home')
  }
}

}
</script>
