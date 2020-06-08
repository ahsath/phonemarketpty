<template>
  <a
    :href="to"
    target="__blank"
    :aria-label="ariaLabel"
    class="is-flex items-center justify-center"
  >
    <b-icon :icon="icon" type="is-white" />
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
a:focus,
a:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
</style>