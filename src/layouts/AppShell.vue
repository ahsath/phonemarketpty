<template>
  <div>
    <app-navbar />
    <slot />
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "AppShell",
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

