import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import SearchFilter from '@/views/filter-search/index.vue';
// import CommentArea from '@/components/comment-area/index.vue';
import DetailPage from '@/views/detail-page/index';

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
    },
    {
      path: '/detailPage',
      name: 'detailpage',
      component: DetailPage,
    }
  ]
});
