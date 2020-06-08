<template>
  <div ref="flickity">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  async mounted() {
    const { default: flickity } = await import(
      /* webpackChunkName: "flickity" */ "flickity"
    );
    await import(
      /* webpackChunkName: "flickity-imagesloaded" */ "flickity-imagesloaded"
    );
    new flickity(this.$refs.flickity, {
      pageDots: false,
      groupCells: true,
      autoPlay: this.autoplay,
      imagesLoaded: true
    });
  }
};
</script>

<style>
.flickity-button:disabled {
  display: none;
}
.flickity-prev-next-button.previous {
  left: -1.25rem !important;
}
.flickity-prev-next-button.next {
  right: -1.25rem !important;
}
.flickity-prev-next-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.flickity-button-icon {
  position: static !important;
  width: 0.75rem !important;
  height: 0.75rem !important;
}
</style>