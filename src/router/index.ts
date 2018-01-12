import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import SearchFilter from '@/views/filter-search/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/searchFilter',
      name: 'searchFilter',
      component: SearchFilter,
    }
  ]
});
