<template>
  <div>
    <!-- Inicio NavBar -->
    <v-app-bar>
      <!-- <v-app-bar-title>CRUD Vue.js + PostgreSQL + Node.js</v-app-bar-title> -->
      <v-spacer></v-spacer>

      <div horizontal layout>
        <div flex>
          <router-link class="nav-link" to="/">Create Employees</router-link>
        </div>
        <div>
          <router-link class="nav-link" to="/login-employee">Login Employee</router-link>
        </div>
        <div>
          <router-link class="nav-link" to="/list-employees">List All Employees</router-link>
        </div>
        <div>
          <router-link class="nav-link" to="/edit-employee">Edit Employee</router-link>
        </div>
      </div>
    </v-app-bar>
    <!-- FIm NavBar -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
