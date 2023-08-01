<template>
  <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
    <div class="flex h-full items-center justify-center bg-white shadow-md">
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form
            @submit.prevent="
              inputOrder({ productName: productName, price: price, quantity: quantity })
            "
          >
            <div class="mb-5">
              <label for="productName" class="mb-3 block text-base font-medium text-[#07074D]">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                v-model="productName"
                placeholder="Smart TV 50 Inci"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label for="price" class="mb-3 block text-base font-medium text-[#07074D]">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="5000"
                v-model="price"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label for="stock" class="mb-3 block text-base font-medium text-[#07074D]">
                stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                placeholder="5"
                v-model="stock"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    inputOrder(orderData) {
      console.log('Order data:', orderData)
    }
  }
}
</script>

<style>
.main {
  background-color: #f7fafc;
  font-family: Arial, sans-serif;
}
</style>
