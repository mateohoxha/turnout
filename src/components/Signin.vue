<template>
    <div class="form-inline">
        <h3>Sign In</h3>
        <div class="form-group">
            <input type="email" placeholder="Email" class="form-control" v-model="email" />
            <input type="password" placeholder="Password" class="form-control" v-model="password" />
            <br><br>
            <button class="btn btn-primary" @click="signIn">Sign In</button>
        </div>
        <br><br>
        <router-link to="/signup">Not a user? Sign up</router-link>
        <br><br>
        <p>{{error.message}}</p>
    </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style>
</style>
