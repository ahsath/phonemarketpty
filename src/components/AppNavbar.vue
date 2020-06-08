<template>
  <b-navbar class="has-background-black-bis" fixed-top transparent>
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <g-image
          src="@/assets/img/logo.png"
          alt="Logo de Esmeralda A3"
          width="150"
          class="is-block"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <div class="social is-flex">
        <app-link-icon
          v-if="$static.metadata.whatsapp"
          :to="`https://wa.me/${$static.metadata.whatsapp}`"
          aria-label="Chat en WhatsApp"
          icon="whatsapp"
        />
        <app-link-icon
          v-if="$static.metadata.instagram"
          :to="`${$static.metadata.instagram}`"
          aria-label="Ir al Instagram"
          icon="instagram"
        />
        <app-link-icon
          v-if="$static.metadata.youtube"
          :to="`${$static.metadata.youtube}`"
          aria-label="Ir a YouTube"
          icon="youtube"
        />
        <app-link-icon
          v-if="$static.metadata.facebook"
          :to="`${$static.metadata.facebook}`"
          aria-label="Ir a Facebook"
          icon="facebook"
        />
      </div>
    </template>
    <template #end>
      <b-navbar-item v-for="edge in $static.categories.edges" :key="edge.node.title" tag="div">
        <g-link :to="edge.node.path" exact>{{ edge.node.title }}</g-link>
      </b-navbar-item>
    </template>
    <template #burger="{ isOpened, toggleActive }">
      <button class="menu-button is-hidden-desktop" aria-label="Menu" @click="toggleActive">
        <b-icon :icon="isOpened ? 'close' : 'menu'" type="is-white" />
      </button>
    </template>
  </b-navbar>
</template>

<static-query>
query {
  categories: allCategory {
    edges {
      node {
        title
       	path
      }
    }
  }
  metadata {
    whatsapp
    instagram
    youtube
    facebook
  }
}
</static-query>

<script>
import AppLinkIcon from "@/components/AppLinkIcon.vue";
export default {
  components: {
    AppLinkIcon
  }
};
</script>

<style>
.navbar {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.navbar-brand {
  align-items: center !important;
  justify-content: space-between;
}
.navbar-burger {
  color: white !important;
}
.navbar-item img {
  max-height: none !important;
}
.menu-button {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  margin-right: 8px;
}
.menu-button:focus,
.menu-button:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
.navbar-item a {
  color: rgba(255, 255, 255, 0.6);
}
.navbar-item a:hover {
  color: white;
}
.social {
  padding: 0.5rem 0.75rem;
}
.active--exact {
  color: white !important;
}
@media screen and (max-width: 991px) {
  .navbar-menu.is-active {
    background-color: #121212;
  }
}
</style>