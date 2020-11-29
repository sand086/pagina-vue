export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/images/we-know-logo.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" },
      { rel: "stylesheet", href: "assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "assets/css/flaticon.css" },
      { rel: "stylesheet", href: "assets/plugins/glightbox/glightbox.min.css" },
      { rel: "stylesheet", href: "assets/css/nice-select.css" },
      { rel: "stylesheet", href: "assets/css/animate.min.css" },
      { rel: "stylesheet", href: "assets/css/default.css" },
      { rel: "stylesheet", href: "assets/css/style.css" },
    ],

    script: [
      { src: "assets/plugins/glightbox/glightbox.min.js", body: true },
      { src: "assets/plugins/accordion/accordion.min.js", body: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js", body: true },
      { src: "assets/plugins/main.js", body: true },

    ]
  },
  /*
  ** Customize the progress-bar color
    <!--Axios -->      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
    <!--Código custom -->          
    <script src="main.js"></script>  


  */
  loading: { color: '#ff4332', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/mixitup.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
