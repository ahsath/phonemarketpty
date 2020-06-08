<template>
  <section class="h-medium is-relative">
    <slot name="banner-img" />
    <div class="is-flex items-end absolute top-0 left-0 w-full h-full bg-black-transparent">
      <div class="section pb-8 flex-grow">
        <div class="container">
          <h1 class="title is-size-4-mobile has-text-white has-text-centered">{{ title }}</h1>
          <app-search />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSearch from "@/components/AppSearch.vue";
export default {
  name: "AppBanner",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    AppSearch
  }
};
</script>

<style>
.bg-black-transparent {
  background-color: rgba(0, 0, 0, 0.54);
}
.pb-8 {
  padding-bottom: 2rem !important;
}
</style>