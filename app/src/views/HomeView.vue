<template>
  <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
    <div
      class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
      v-if="orders?.length <= 0"
    >
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="max-w-md">
              <p class="text-5xl font-bold">Hello there</p>
              <p class="py-6">
                Looks like you havent got any orders yet. You can always add your orders in add
                order page, or click button below
              </p>
              <button
                @click.prevent="$router.push('/add')"
                class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              >
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="../components/img/keranjang.png" />
      </div>
    </div>

    <table v-else class="table-auto w-full">
      <thead class="border-b">
        <tr class="bg-gray-100">
          <th class="text-left p-4 font-medium">Name</th>
          <th class="text-left p-4 font-medium">Price</th>
          <th class="p-4 font-medium text-center">Stock</th>
          <th class="p-4 font-medium text-center">total price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, i) in orders" :key="i" class="border-b hover:bg-gray-50">
          <td class="p-4">{{ order.productName }}</td>
          <td class="p-4">{{ currency(order.price) }}</td>
          <td class="p-4 text-center">{{ order.stock }}</td>
          <td class="p-4 text-center">{{ currency(order.stock * order.price) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useOrderStore } from '../stores/orderStore'
export default {
  name: 'HomePage',
  data() {
    return {}
  },

  methods: {
    ...mapActions(useOrderStore, ['getOrder'])
  },
  created() {
    this.getOrder()
  },
  computed: {
    ...mapWritableState(useOrderStore, ['orders']),
    currency() {
      return (price) => {
        return price?.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR'
        })
      }
    }
  }
}
</script>

<style></style>
