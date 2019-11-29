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
import firebase from "firebase";

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
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
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
.signin {
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
