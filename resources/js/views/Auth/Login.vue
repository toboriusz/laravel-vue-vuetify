<template>
  <v-form @submit.prevent="login">
    <v-text-field append-icon="person" name="email" label="Login" type="email" v-model="email" :autofocus="!$route.query.email" placeholder=" "></v-text-field>
    <v-text-field append-icon="lock" name="password" label="Password" type="password" v-model="password" :autofocus="!!$route.query.email" placeholder=" "></v-text-field>
    <v-checkbox label="Remember me" v-model="remember_me" color="primary"></v-checkbox>
    <div class="layout-row">
      <v-btn type="submit" block color="primary" :loading="loading">Login</v-btn>
      <v-btn @click="resetPassword" class="mt-3" block flat>Forgot password</v-btn>
    </div>
  </v-form>
</template>

<script>
  export default {

    name: 'ViewLogin',

    data () {
    	return {
		    loading: false,
	      email: this.$route.query.email || '',
	      password: '',
	      remember_me: false
		  }
  	},
  	
  	computed: {
  		logoSrc () {
  			return require('Assets/logo-dark.svg')
  		}
  	},

  	methods: {
  		login () {
  			this.loading = true
        this.$auth.login({
          data: {
            email: this.email,
            password: this.password,
            remember_me: this.remember_me  
          },
          rememberMe: this.remember_me, 
          success: (e) => {
            console.log(e)
          },
          error: (e) => {
            this.loading = false
            console.log(e)
          }
        })
  		},
      resetPassword () {
        let query = {}
        if(this.email.indexOf('@') !== -1)
          query.email = this.email

        this.$router.push({ name: 'SendResetEmail', query: query})
      }
  	}
  }
</script>
