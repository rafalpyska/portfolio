import "./assets/css/main.css";
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;800&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
  })
  head.bodyAttrs = { class: 'font-baloo bg-blue-500 flex min-h-screen justify-center items-center' }
}
