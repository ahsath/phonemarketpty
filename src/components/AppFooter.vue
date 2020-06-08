<template>
  <footer class="footer">
    <div class="has-text-centered">
      <div class="is-inline-block leading-none">
        <a
          v-if="$static.metadata.whatsapp"
          :href="`https://wa.me/${$static.metadata.whatsapp}`"
          class="is-inline-block has-text-grey-light ma-1"
        >
          <b-icon icon="whatsapp" />
        </a>
        <a
          v-if="$static.metadata.instagram"
          :href="`${$static.metadata.instagram}`"
          class="is-inline-block has-text-grey-light ma-1"
        >
          <b-icon icon="instagram" />
        </a>
        <a
          v-if="$static.metadata.youtube"
          :href="`${$static.metadata.youtube}`"
          class="is-inline-block has-text-grey-light ma-1"
        >
          <b-icon icon="youtube" />
        </a>
        <a
          v-if="$static.metadata.facebook"
          :href="`${$static.metadata.facebook}`"
          class="is-inline-block has-text-grey-light ma-1"
        >
          <b-icon icon="facebook" />
        </a>
      </div>
      <p class="mt-4 is-size-7 has-text-grey">
        &copy;
        {{ new Date().getFullYear() }} · EsmeraldA3
      </p>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    whatsapp
    instagram
    youtube
    facebook
  }
}
</static-query>

<style scoped>
.ma-1 {
  margin: 0.25rem;
}
.leading-none {
  line-height: 1;
}
a:hover {
  color: black !important;
}
</style>