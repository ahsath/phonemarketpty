<template>
  <app-shell>
    <app-banner title="Venta y reparación de celulares, tablet y computadoras.">
      <template #banner-img>
        <g-image
          src="@/assets/img/banner-img.jpg"
          alt="Gama de celulares"
          class="absolute top-0 left-0 h-full object-cover is-block"
        />
      </template>
    </app-banner>
    <main>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <g-link :to="$page.p1.edges[0].node.category.path">
            <h1
              class="title is-size-4-mobile has-text-black-ter mb-0"
            >{{ $page.p1.edges[0].node.category.title }}</h1>
          </g-link>
          <flkty-carrousel>
            <div class="w-86 mx-2 my-9" v-for="edge in $page.p1.edges" :key="edge.node.id">
              <app-product-card :product="edge.node" />
            </div>
          </flkty-carrousel>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <g-link :to="$page.p2.edges[0].node.category.path">
            <h1
              class="title is-size-4-mobile has-text-black-ter mb-0"
            >{{ $page.p2.edges[0].node.category.title }}</h1>
          </g-link>
          <flkty-carrousel>
            <div class="w-86 mx-2 my-9" v-for="edge in $page.p2.edges" :key="edge.node.id">
              <app-product-card :product="edge.node" />
            </div>
          </flkty-carrousel>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="is-size-7-mobile is-size-6 is-uppercase">Más recientes</span>
          <g-link :to="$page.p3.edges[0].node.category.path">
            <h1
              class="title is-size-4-mobile has-text-black-ter mb-0"
            >{{ $page.p3.edges[0].node.category.title }}</h1>
          </g-link>
          <flkty-carrousel>
            <div class="w-86 mx-2 my-9" v-for="edge in $page.p3.edges" :key="edge.node.id">
              <app-product-card :product="edge.node" />
            </div>
          </flkty-carrousel>
        </div>
      </section>
    </main>
  </app-shell>
</template>

<page-query>
query {
  p1: allProduct(filter: { category: { eq: "Celulares" } }, limit: 10) {
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
          path
        }
        cover_img(width: 344, height: 194, fit: cover, background: "white", quality: 80)
      }
    }
  }
  p2: allProduct(filter: { category: { eq: "Accesorios" } }, limit: 10) {  
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
          path
        }
        cover_img(width: 344, height: 194, fit: cover, background: "white", quality: 80)
      }
    }
  }
  p3: allProduct(filter: { category: { eq: "Reparaciones" } }, limit: 10) {  
    totalCount
    edges {
      node {
        id
        title
        unit_price
        path
        available
        category {
          title
          path
        }
        cover_img(width: 344, height: 194, fit: cover, background: "white", quality: 80)
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
  name: "Home",
  data: () => ({
    meta: {
      title: "Venta de celulares, Accesorios y Reparaciones "
    }
  }),
  metaInfo() {
    return {
      title: this.meta.title,
      htmlAttrs: {
        lang: "es-CO"
      },
      meta: [
        {
          name: "title",
          content: this.meta.title
        },
        {
          name: "description",
          content: this.$page.metadata.siteDescription
        },
        // og / facebook
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl
        },
        {
          property: "og:title",
          content: this.meta.title
        },
        {
          property: "og:description",
          content: this.$page.metadata.siteDescription
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
          content: this.$page.metadata.siteUrl
        },
        {
          property: "twitter:title",
          content: this.meta.title
        },
        {
          property: "twitter:description",
          content: this.$page.metadata.siteDescription
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
.mb-0 {
  margin-bottom: 0 !important;
}
.w-86 {
  width: 21.5rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.my-9 {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
}
</style>
