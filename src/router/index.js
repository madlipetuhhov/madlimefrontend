import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from "@/views/PortfolioView.vue";
import AboutView from "@/views/AboutView.vue";
import PriceView from "@/views/PriceView.vue";
import ContactView from "@/views/ContactView.vue";
import ConditionsView from "@/views/ConditionsView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/portfoolio',
    name: 'portfolioRoute',
    component: PortfolioView
  },
  {
    path: '/minust',
    name: 'aboutRoute',
    component: AboutView
  },
  {
    path: '/hind',
    name: 'priceRoute',
    component: PriceView
  },
  {
    path: '/kontakt',
    name: 'contactRoute',
    component: ContactView
  },
  {
    path: '/tingimused',
    name: 'conditionsRoute',
    component: ConditionsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
