<template>
  <v-app>
    <v-container class="fill-height">
      <v-card elevation="1" class="mx-auto" width="400">
        <v-card-title class="headline justify-center">Login</v-card-title>
        <v-card-text class="mr-2">
          <v-text-field
            v-model="email"
            label="E-mail"
            type="text"
            required
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="senha"
            label="Senha"
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

<script>
import SweetAlert2 from "sweetalert2";
export default {
  name: "Login",

  data: () => ({
    ver: false,
    email: "",
    senha: "",
  }),

  methods: {
    login() {
      const swal = new SweetAlert2({
        icon: "success",
        title: "Login successfully!",
        showConfirmButton: false,
        timer: 1000,
      });
      this.$router.push({ name: "list" });
    },
    createNewEmployee(){
      this.$router.push({ name: "create" });
    }
  },
};
</script>