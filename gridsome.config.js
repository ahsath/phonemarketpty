// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Phone market PTY',
  siteUrl: 'https://phonemarketpty.com',
  siteDescription: 'Encuentra aquí lo último en Celulares, Repuestos y Servico técnico. Realizamos Envíos a todo Panamá.',
  metadata: {
    whatsapp: '50760550445',
    instagram: 'https://instagram.com/phonemarketpty20?igshid=1ohw3fhtzconx',
    youtube: 'https://www.youtube.com/channel/UCKFs4TM_gEklfAFEbNOfV-g?view_as=subscriber',
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
