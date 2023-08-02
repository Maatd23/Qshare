import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    orders: []
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
          const text = await response.json()
          throw new Error(text.message)
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
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: error.message
        })
      }
    },
    async register(userData) {
      try {
        const response = await fetch(`http://localhost:3000/register`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        if (!response.ok) {
          const text = await response.json()
          throw new Error(text.message)
        }

        const data = await response.json()
        this.router.push('/login')
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
          title: 'Create account successfully'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Register Error',
          text: error.message
        })
      }
    },
    async getOrder() {
      try {
        const response = await fetch(`http://localhost:3000/orders`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.access_token
          }
        })

        if (!response.ok) {
          const text = await response.json()
          throw new Error(text.message)
        }

        const data = await response.json()
        this.orders = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Register Error',
          text: error.message
        })
      }
    },
    async addOrder(dataOrder) {
      try {
        console.log(dataOrder)
        const response = await fetch(`http://localhost:3000/orders`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.access_token
          },
          body: JSON.stringify(dataOrder)
        })

        if (!response.ok) {
          const text = await response.json()
          throw new Error(text.message)
        }

        const data = await response.json()
        await this.getOrder()
        this.router.push('/')
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
          title: 'Create order data successfully'
        })
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Register Error',
          text: error.message
        })
      }
    }
  }
})
