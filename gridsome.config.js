// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Phone market PTY',
  siteUrl: 'https://phonemarketpty.com',
  siteDescription: 'En Esmeralda3 vendemos y tallamos todo tipo de rocas preciosas y semipreciosas, con un inventario de más de 10.000 piezas entre meteoritos, raras y más',
  metadata: {
    whatsapp: '50760550445',
    instagram: 'https://instagram.com/phonemarketpty20?igshid=1ohw3fhtzconx',
    youtube: '',
    facebook: 'https://www.facebook.com/phonemarketpty20/'
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
