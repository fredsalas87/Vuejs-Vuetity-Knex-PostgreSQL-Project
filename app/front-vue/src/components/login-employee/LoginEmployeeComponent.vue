<template>
  <v-app>
    <v-container class="fill-height">
      <v-card elevation="1" class="mx-auto" width="400" color="#F0F4C3">
        <v-card-title class="headline justify-center">Login</v-card-title>
        <v-card-text class="mr-2">
          <v-text-field
            v-model="params.email"
            label="E-mail"
            type="text"
            required
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="params.password"
            label="Password"
            required
            outlined
            type="password"
          >
          </v-text-field>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="login">Continue</v-btn>
          <v-btn color="primary" @click="createNewEmployee">Registration</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script src="./LoginEmployee.js"></script>