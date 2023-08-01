import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    baseUrl: 'http://localhost:3000'
  }),

  actions: {
    async login(userData) {
      try {
        const response = await fetch(`http://localhost:3000/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        if (!response.ok) {
          const text = await response.text()
          throw new Error(text)
        }

        const data = await response.json()

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        localStorage.access_token = data.access_token
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: `${err.response.request.statusText}`,
          text: `${error.response.data.message}`
        })
      }
    }
  }
})
