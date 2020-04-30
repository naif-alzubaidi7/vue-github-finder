<template    >
  <div class='card text-center'> 
            <img  :src="userObj.avatar_url" alt='' class='round-img' style='width: 60px' />
            <h3> {{userObj.login}}</h3>
   
        <div>
            <a  class="btn btn-dark btn-sm my-1">
                More
            </a>
        </div>
         </div>


 
</template> 
 



 
 

<script>
  
export default {
  name: "userItem",

    props:['userObj'] 
    ,
    data: function () {
  return {
    usersArr: this.usersValue
  }
},

  
     created() {
 console.log("dgdfg",this.usersArr);
  } 
}
</script>