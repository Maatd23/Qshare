<template>
  <div class="bg-gray-200 h-screen overflow-hidden flex items-center justify-center">
    <div class="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
      <div
        class="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
          <path
            d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
          />
        </svg>
      </div>
      <form class="p-12 md:p-24" @submit.prevent="handleLogin">
        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            fill="currentColor"
            class="absolute ml-3 bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
            />
          </svg>

          <input
            v-model="email"
            type="Email"
            id="Email"
            class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Email"
          />
        </div>
        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
            <path
              d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"
            />
          </svg>
          <input
            v-model="password"
            type="password"
            id="password"
            class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Password"
          />
        </div>
        <button
          class="bg-red-500 text-white active:bg-red-600 font-medium p-2 md:p-4 uppercase w-full"
        >
          Login
        </button>
        <div class="flex justify-between w-full container mx-auto mt-6 text-slate-100 text-sm">
          <div class="text-black select-none cursor-pointer">Forgot your password</div>
          <div class="text-black select-none">
            Don't have an account?
            <span
              class="underline text-sm hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              @click.prevent="this.$router.push('/register')"
              >Get Started</span
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useOrderStore } from '../stores/orderStore'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useOrderStore, ['login']),
    handleLogin() {
      this.login({ email: this.email, password: this.password })
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
