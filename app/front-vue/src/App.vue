<template>
  <div>
    <!-- Inicio NavBar -->
    <v-app-bar>
      <!-- <v-app-bar-title>CRUD Vue.js + PostgreSQL + Node.js</v-app-bar-title> -->
      <v-spacer></v-spacer>

      <div class="container">
        <!-- <a class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node.js</a> -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Create Employees</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employees">List All Employees</router-link>
          </li>
        </ul>
      </div>
    </v-app-bar>
    <!-- FIm NavBar -->
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
