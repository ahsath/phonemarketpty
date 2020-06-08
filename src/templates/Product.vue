<template>
  <app-shell>
    <main>
      <v-viewer class="has-background-black-bis">
        <flkty-carrousel style="margin: 0 2rem">
          <g-image
            v-for="(image, i) in $page.product.images"
            :key="i"
            :src="image"
            :alt="$page.product.title"
            class="is-block object-cover"
            style
          />
        </flkty-carrousel>
      </v-viewer>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-two-thirds-tablet is-half-desktop mx-auto">
              <b-tag class="mr-2" type="is-dark" rounded>{{ $page.product.category.title }}</b-tag>
              <b-tag class="mr-2" v-if="$page.product.available" rounded>Disponible</b-tag>
              <b-tag v-else disabled rounded>Agotado</b-tag>
            </div>
          </div>
          <div class="columns">
            <div class="column is-two-thirds-tablet is-half-desktop mx-auto">
              <h1 class="title is-4">{{ $page.product.title }}</h1>
              <h2
                class="title is-3 has-text-weight-light has-text-grey-dark"
              >${{ $page.product.unit_price }}</h2>
            </div>
          </div>
          <div class="columns">
            <div class="column is-two-thirds-tablet is-half-desktop mx-auto">
              <b-button
                type="is-success"
                icon-left="whatsapp"
                rounded
                expanded
                tag="a"
                :href="
                `https://wa.me/${$page.metadata.whatsapp}?text=Hola, estoy interesad@ en este producto: ${$page.metadata.siteUrl + $page.product.path}`
              "
              >Preguntar por este producto</b-button>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column content is-two-thirds-tablet is-half-desktop mx-auto">
              <h3 class="title is-4">Descripción</h3>
              <div v-html="$page.product.content"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </app-shell>
</template>

<page-query>
query($path: String) {
  product(path: $path) {
    path
    title
    unit_price
    available
    description
    content
    category {
      title
    }
    images
  }
  metadata {
    siteName
    siteUrl
    siteDescription
    whatsapp
  }
}
</page-query>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer/src/component.vue";

export default {
  components: {
    VViewer: Viewer
  },
  metaInfo() {
    return {
      title: `${this.$page.product.title} · $${this.$page.product.unit_price}`,
      headAttrs: {
        prefix:
          "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#"
      },
      htmlAttrs: {
        lang: "es-CO"
      },
      meta: [
        {
          name: "title",
          content: `${this.$page.product.title} · $${this.$page.product.unit_price}`
        },
        {
          name: "description",
          content: `${this.$page.product.description}`
        },
        // og / facebook
        {
          property: "og:url",
          content: `${this.$page.metadata.siteUrl}${this.$page.product.path}`
        },
        {
          property: "og:title",
          content: `${this.$page.product.title} · $${this.$page.product.unit_price}`
        },
        {
          property: "og:description",
          content: `${this.$page.product.description}`
        },
        {
          property: "og:image",
          content: `${this.$page.metadata.siteUrl}${this.$page.product.images[0].src}`
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "es_CO" },
        // twitter
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:url",
          content: `${this.$page.metadata.siteUrl}${this.$page.product.path}`
        },
        {
          property: "twitter:title",
          content: `${this.$page.product.title} · $${this.$page.product.unit_price}`
        },
        {
          property: "twitter:description",
          content: `${this.$page.product.description}`
        },
        {
          property: "twitter:image",
          content: `${this.$page.metadata.siteUrl}${this.$page.product.images[0].src}`
        }
      ]
    };
  }
};
</script>

<style scoped>
main {
  padding-top: 4rem;
}
img {
  cursor: zoom-in;
  height: 17.625rem;
  min-width: 6.25rem;
  width: initial;
  margin-right: 0.125rem;
  margin-bottom: 0.125rem;
}
@media screen and (max-width: 991px) {
  main {
    padding-top: 3.25rem;
  }
}
</style>