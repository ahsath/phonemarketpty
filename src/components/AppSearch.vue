<template>
  <ClientOnly>
    <b-autocomplete
      v-model="search"
      :data="filteredDataArray"
      field="node.title"
      class="max-w-xl mx-auto"
      placeholder="Buscar por minerales, cuarzos, gemas, opalos..."
      icon="magnify"
      dropdown-position="bottom"
      clearable
      open-on-focus
    >
      <template #default="{ option }">
        <g-link :to="option.node.path">
          <article class="media">
            <figure class="media-left">
              <g-image :src="option.node.cover_img" :alt="option.node.title" class="is-block" />
            </figure>
            <div class="media-content">
              <div class="content">
                <div class="has-text-grey-dark">{{ option.node.title }}</div>
                <div
                  class="has-text-black-bis has-text-weight-semibold"
                >${{ option.node.unit_price }}</div>
                <b-tag class="mr-2" type="is-dark">{{ option.node.category.title }}</b-tag>
                <b-tag v-if="option.node.available" type="is-success">Disponible</b-tag>
                <b-tag v-else type="is-danger">Agotado</b-tag>
              </div>
            </div>
          </article>
        </g-link>
      </template>
      <template #empty>
        No puedes encontrar
        <strong>{{ search }}</strong>?
        <a
          :href="`https://wa.me/${$static.metadata.whatsapp}?text=Hola, estoy buscando: ${search}`"
          class="has-text-info hast-text-size-7"
        >
          <b-icon icon="whatsapp" size="is-small" />Pregúntame en
          WhatsApp
        </a>
      </template>
    </b-autocomplete>
  </ClientOnly>
</template>

<static-query>
 query {
  products: allProduct {
    edges {
      node {
        title
        unit_price
        available
        category {
          title
        }
        path
        cover_img(width: 64, height: 64, fit: contain, background: "white")
      }
    }
  }
  metadata {
    whatsapp
  }
}
</static-query>

<script>
export default {
  name: "AppSearch",
  data: () => ({
    search: ""
  }),
  computed: {
    filteredDataArray() {
      return this.$static.products.edges.filter(
        ({ node }) =>
          node.title
            .toString()
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) >= 0
      );
    }
  }
};
</script>

<style>
.dropdown-item {
  padding-right: 1rem !important;
}
.autocomplete .dropdown-item.is-disabled {
  opacity: 1 !important;
  cursor: initial !important;
}
</style>