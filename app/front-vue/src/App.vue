<template>
  <v-app>
    <!-- Inicio NavBar -->
    <v-app-bar color="white">
      <v-app-bar-title class="navbar-brand mr-5">CRUD Vue.js + PostgreSQL + Node.js</v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- <v-tabs align-with-title>
        <v-tab><router-link class="nav-link" to="/">Login Employee</router-link></v-tab>
        <v-tab><router-link class="nav-link" to="/create-employee">Create Employees</router-link></v-tab>
        <v-tab><router-link class="nav-link" to="/list-employees">List All Employees</router-link></v-tab>
        <v-tab><router-link class="nav-link" to="/edit-employee/:id">Edit Employee</router-link></v-tab>
      </v-tabs> -->
      
    </v-app-bar>
    <!-- FIm NavBar -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
