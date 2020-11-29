import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4db0e843 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _48b78f44 = () => interopDefault(import('../pages/book-a-tour.vue' /* webpackChunkName: "pages/book-a-tour" */))
const _b0d69054 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _517ed253 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _25092208 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _9e9ddba6 = () => interopDefault(import('../pages/index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _9e81aca4 = () => interopDefault(import('../pages/index-3.vue' /* webpackChunkName: "pages/index-3" */))
const _055d20e6 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _0203f07c = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _2b11f2e2 = () => interopDefault(import('../pages/single-event.vue' /* webpackChunkName: "pages/single-event" */))
const _735a1dee = () => interopDefault(import('../pages/single-news.vue' /* webpackChunkName: "pages/single-news" */))
const _46b95217 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _6d68c308 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4db0e843,
    name: "about"
  }, {
    path: "/book-a-tour",
    component: _48b78f44,
    name: "book-a-tour"
  }, {
    path: "/contact",
    component: _b0d69054,
    name: "contact"
  }, {
    path: "/events",
    component: _517ed253,
    name: "events"
  }, {
    path: "/gallery",
    component: _25092208,
    name: "gallery"
  }, {
    path: "/index-2",
    component: _9e9ddba6,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _9e81aca4,
    name: "index-3"
  }, {
    path: "/news",
    component: _055d20e6,
    name: "news"
  }, {
    path: "/pricing",
    component: _0203f07c,
    name: "pricing"
  }, {
    path: "/single-event",
    component: _2b11f2e2,
    name: "single-event"
  }, {
    path: "/single-news",
    component: _735a1dee,
    name: "single-news"
  }, {
    path: "/team",
    component: _46b95217,
    name: "team"
  }, {
    path: "/",
    component: _6d68c308,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
