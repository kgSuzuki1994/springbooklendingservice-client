<template>
  <div class="signin">
    <h2>Sign in</h2>
    <div class="input-form-wrapper">
      <el-input type="text" placeholder="Username" v-model="username" />
    </div>
    <div class="input-form-wrapper">
      <el-input type="password" placeholder="Password" v-model="password" />
    </div>
    <el-button @click="signIn">Signin</el-button>
    <p>
      You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn: async function() {
      await axios
        .post("http://localhost:8080/signin", this.username, this.password)
        .then(() => this.$router.push("/booklist"))
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    }
  }
};
</script>
