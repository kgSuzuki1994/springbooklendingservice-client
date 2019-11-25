<template>
  <div class="signup">
    <h2>Sign up</h2>
    <div class="input-form-wrapper">
      <el-input type="text" placeholder="Username" v-model="username" />
    </div>
    <div class="input-form-wrapper">
      <el-input tye="password" placeholder="Password" v-model="password" />
    </div>

    <el-button @click="SignUp">Register</el-button>
    <p>
      Do you have an account?
      <router-link to="/signin">sign in now!</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>