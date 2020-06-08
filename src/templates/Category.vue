<template>
  <app-shell>
    <app-banner :title="$page.category.title">
      <template #banner-img>
        <g-image
          src="@/assets/img/banner-img.jpg"
          alt="Venta y talla de rocas preciosas, semipreciosas y fósiles"
          class="absolute top-0 left-0 h-full object-cover is-block"
        />
      </template>
    </app-banner>
    <main>
      <section class="section">
        <div class="container">
          <span
            class="has-text-grey-dark is-uppercase text-sm has-text-weight-medium is-inline-block"
            style="margin-bottom:1rem;"
          >{{ $page.category.belongsTo.totalCount }} artículo{{ `${$page.category.belongsTo.edges.length >= 2 ? 's' : ''}` }}</span>
          <div class="columns is-multiline">
            <div
              class="column is-6-tablet is-4-desktop is-3-widescreen"
              v-for="edge in $page.category.belongsTo.edges"
              :key="edge.node.id"
            >
              <app-product-card :product="edge.node" class="mx-auto" :key="edge.node.id" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </app-shell>
</template>

<page-query>
query ($path: String) {
  category(path: $path) {
    title
    path
    belongsTo {
      totalCount
      edges {
        node {
          ... on Product {
            id
            title
            unit_price
            path
            available
            category {
              title
            }
            cover_img(width: 344, height: 194, fit: cover, background: "white", quality: 80)
          }
        }
      }
    }
  }
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</page-query>

<script>
export default {
  data: () => ({
    meta: {
      description:
        "Explora nuestra lista de productos y encuentra miles de rocas preciosas y únicas en la categoría de"
    }
  }),
  metaInfo() {
    return {
      title: this.$page.category.title,
      htmlAttrs: {
        lang: "es-CO"
      },
      meta: [
        {
          name: "title",
          content: `Categorías · ${this.$page.category.title}`
        },
        {
          key: "description",
          name: "description",
          content: `${this.meta.description} ${this.$page.category.title}`
        },
        // og / facebook
        {
          property: "og:url",
          content: `${this.$page.metadata.siteUrl}${this.$page.category.path}`
        },
        {
          property: "og:title",
          content: `Categorías · ${this.$page.category.title}`
        },
        {
          property: "og:description",
          content: `${this.meta.description} ${this.$page.category.title}`
        },
        {
          property: "og:image",
          content: `${this.$page.metadata.siteUrl}/og.jpg`
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "es_CO" },
        // twitter
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:url",
          content: `${this.$page.metadata.siteUrl}${this.$page.category.path}`
        },
        {
          property: "twitter:title",
          content: `Categorías · ${this.$page.category.title}`
        },
        {
          property: "twitter:description",
          content: `${this.meta.description} ${this.$page.category.title}`
        },
        {
          property: "twitter:image",
          content: `${this.$page.metadata.siteUrl}/og.jpg`
        }
      ]
    };
  }
};
</script>

<style>
.text-sm {
  font-size: 0.875rem;
}
</style>