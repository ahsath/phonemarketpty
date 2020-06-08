<template>
  <g-link
    :to="product.path"
    class="is-block mx-w-86 rounded-lg shadow hover:shadow-xl transition-all duration-350 ease-out"
    target="__self"
  >
    <g-image :src="product.cover_img" :alt="product.title" class="is-block rounded-t-lg" />
    <div class="pa-4">
      <b-tag v-if="product.available" type="is-light" rounded>Disponible</b-tag>
      <b-tag v-else disabled>Agotado</b-tag>
      <h1
        class="has-text-grey-dark is-size-6 leading-tight mt-2 has-text-weight-light"
      >{{ product.title }}</h1>
      <div
        class="has-text-weight-medium tracking-wide mt-4 has-text-right has-text-grey-dark is-size-5"
      >${{ product.unit_price }}</div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "AppProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.mx-w-86 {
  max-width: 21.5rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.pa-4 {
  padding: 1rem;
}
.transition-all {
  transition-property: all;
}
.duration-350 {
  transition-duration: 0.35s;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.leading-tight {
  line-height: 1.25;
}
</style>