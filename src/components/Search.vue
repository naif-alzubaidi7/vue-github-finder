<template>
    <div>
                <form  @submit.prevent="onSubmit()" class="form">
                    <input type="text" name="text" v-model='text' placeholder="Search Users ...."> 
                    <input type="submit" name="Search" value="Search" class="btn btn-dark btn-block"> 

                </form>
                 
                
                <button class="btn btn-light btn-block " onClick={githubContext.clearUsers}>Clear</button>

 

            </div>
</template>



<script>
 import axios from 'axios';

export default {
   data:  function () {
       return {
    text: '',
    

       }
  },
  created (){

  }, 
    
  
  methods :{
      onSubmit(){
          console.log('cleckkkeddd'+this.text);
                   axios.get(`https://api.github.com/search/users?q=${this.text}`)
    .then(res => {
      // JSON responses are automatically parsed.
     console.log(res);
           this.$emit('childToParent', res.data.items)

     
    }) 
          
      } 

  }
};
</script>