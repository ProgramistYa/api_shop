import Vue from 'vue';
import Router from 'vue-router';
import list from '@/components/NoteList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: list,
    },
  ],
});
