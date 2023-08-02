<template>
  <aside class="w-72 bg-[#1c212c] flex flex-col items-center pt-5 pb-2 space-y-7 min-h-screen">
    <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
      <a
        href="#"
        class="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
        >Flowtrail UI</a
      >
    </div>
    <!-- menu items -->
    <div class="w-full flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
      <div class="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
        Menu
      </div>

      <div
        class="w-full flex items-center gap-x-1.5 group select-none"
        @click.prevent="$router.push('/')"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            :class="{
              'absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300':
                $route.name === 'home',
              'absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300':
                $route.name !== 'home'
            }"
          ></div>
        </div>
        <div
          :class="{
            'bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm':
              $route.name === 'home',
            'group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm':
              $route.name !== 'home'
          }"
          href="#"
        >
          <svg
            :class="{
              'h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200':
                $route.name === 'home',
              'h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200':
                $route.name !== 'home'
            }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
            ></path>
          </svg>

          <span class="font-QuicksandMedium">Home</span>
        </div>
      </div>

      <div
        class="w-full flex items-center gap-x-1.5 group select-none"
        @click.prevent="$router.push('/add')"
      >
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            :class="{
              'absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300':
                $route.name === 'addOrder',
              'absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300':
                $route.name !== 'addOrder'
            }"
          ></div>
        </div>
        <div
          :class="{
            'bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm':
              $route.name === 'addOrder',
            'group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm':
              $route.name !== 'addOrder'
          }"
          href="#"
        >
          <svg
            :class="{
              'h-4 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200':
                $route.name === 'addOrder',
              'h-4 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200':
                $route.name !== 'addOrder'
            }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          <span class="font-QuicksandMedium">Add Order</span>
        </div>
      </div>

      <div class="w-full flex items-center gap-x-1.5 group select-none">
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"
          ></div>
        </div>
        <div
          class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
          href="#"
        >
          <svg
            class="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM17 13H11V7H13V11H17V13Z"
            ></path>
          </svg>

          <span class="font-QuicksandMedium">Coming soon</span>
        </div>
      </div>
    </div>

    <!-- menu items -->
    <div class="flex-grow"></div>
    <!-- Add this div to push the logout button to the bottom -->
    <div class="bottom-0 w-full text-gray-500 fill-gray-500 text-sm">
      <div class="w-full flex items-center gap-x-1.5 group select-none">
        <div
          class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"
          ></div>
        </div>
        <div
          class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm"
          href="#"
          @click.prevent="logout"
        >
          <svg
            class="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 21H5C3.89543 21 3 20.1046 3 19V15H5V19H19V5H5V9H3V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM11 16V13H3V11H11V8L16 12L11 16Z"
            ></path>
          </svg>
          <span class="font-QuicksandMedium">Log Out</span>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style></style>
