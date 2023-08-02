<template>
  <div
    :class="{
      flex: shouldUseFlexLayout(),
      'min-h-screen w-full text-gray-800': shouldUseFlexLayout()
    }"
  >
    <SideBarVue v-if="shouldUseFlexLayout()" />
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import SideBarVue from './components/SideBar.vue'
export default {
  components: { SideBarVue },
  methods: {
    shouldUseFlexLayout() {
      return this.$route.name !== 'login' && this.$route.name !== 'register'
    }
  }
}
</script>
