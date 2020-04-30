<template    >
<div :style ="btnStyles">
<div  v-for="user in usersValue" :key="user.id">   <UserItem  :userObj="user" />
 
</div>


</div>

</template> 
 



 
 

<script>
 import UserItem from "./UserItem.vue";
 
export default {
  name: "users",

    props:['usersValue'] 
    ,
    data: function () {
  return {
    usersArr: this.usersValue
  }
},
  components: {
 UserItem
  },
      computed: {
    btnStyles() {
      return {
    display:'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
      };
    }
    },
     created() {
 console.log("dgdfg",this.usersArr);
  } 
};
</script>