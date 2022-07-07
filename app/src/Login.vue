<template>
  <v-app>
    <v-container class="fill-height">
      <v-card elevation="2" class="mx-auto" width="400">
        <v-card-title class="headline justify-center"> Login </v-card-title>
        <v-card-text class="mr-2">
          <v-text-field v-model="email" label="E-mail" required> </v-text-field>
          <v-text-field v-model="senha" label="Senha" required> </v-text-field>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="submit">Entrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",

  data: () => ({
    email: "",
    senha: "",
  }),

  methods: {
    submit() {
      alert("Usuário logado")
    }
  }
};
</script>

<style scoped>
</style>
