// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Esmeralda3',
  siteUrl: 'https://esmeralda3.com',
  siteDescription: 'En Esmeralda3 vendemos y tallamos todo tipo de rocas preciosas y semipreciosas, con un inventario de más de 10.000 piezas entre meteoritos, raras y más',
  metadata: {
    whatsapp: '573122427586',
    instagram: 'https://www.instagram.com/esmerald_a3/',
    youtube: 'https://www.youtube.com/channel/UC8cHuqljd4lyPDJr9Tenn5Q',
    facebook: 'https://www.facebook.com/Esmerald-A3-350095612260511/'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'products/*.md',
        typeName: 'Product',
        resolveAbsolutePaths: true,
        refs: {
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Product: [
      {
        path: '/:category/:title',
        component: './src/templates/Product.vue'
      }
    ],
    Category: [
      {
        path: '/:title',
        component: './src/templates/Category.vue'
      }
    ]
  }
}
