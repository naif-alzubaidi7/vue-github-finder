

<template>
  <div>
    <Search @childToParent="getUsersValue"/>

       <Users class="container" :usersValue="users"></Users>
   </div>
</template>

<script>
import Search from "./Search.vue";
import Users from "./Users.vue";

export default {
  name: "home",
  components: {
    Search,
    Users
  },
   created() {
console.log('from home');
  },
    data() {
    return { users: [] };
  },
  methods : {

    getUsersValue: function(params) {
      this.users = params;
    }

  }

};
</script>