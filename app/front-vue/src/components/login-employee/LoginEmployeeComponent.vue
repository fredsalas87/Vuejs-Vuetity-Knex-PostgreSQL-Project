<!--<template>
  <v-app>
    <div id="content">
      <v-row>
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="headline"> Login </v-card-title>

            <v-card-text>
              <v-text-field
                type="text"
                label="username"
                outlined
                v-model="username"
              ></v-text-field>
              <v-text-field
                label="password"
                outlined
                name="password"
                v-model="password"
                :type="ver ? 'text' : 'password'"
                :append-icon="ver ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="ver = !ver"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="login()"> Continue </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>-->

<script>
export default {
  name: "CreateEmployeeComponent",
  data() {
    return {
      employee: {
        name: "",
        job_role: "",
        birth: "",
        employee_registration: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {},
};
</script>