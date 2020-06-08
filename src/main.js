import AppShell from '~/layouts/AppShell.vue'
import AppBanner from "@/components/AppBanner.vue";
import AppProductCard from "@/components/AppProductCard.vue";
import FlktyCarrousel from "@/components/FlktyCarrousel.vue";
import Buefy from 'buefy'
import '@/assets/scss/styles.scss'
import 'flickity/css/flickity.css'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@css-pkg/circular-std@2.0.0/dist/woff.min.css'
  })
  Vue.component('AppShell', AppShell)
  Vue.component('AppBanner', AppBanner)
  Vue.component('AppProductCard', AppProductCard)
  Vue.component('FlktyCarrousel', FlktyCarrousel)
}
