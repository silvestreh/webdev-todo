import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from 'router/routes-map';
import Resource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(Resource);

const router = new VueRouter();

router.map(routes);

router.start(App, '#app');
