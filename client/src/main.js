import "babel-polyfill";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './app.vue';
import routes from 'router/routes-map';
import redirs from 'router/redirs';
import { authHook, } from 'router/hooks';
import Resource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(Resource);

const router = new VueRouter();

router.map(routes);
router.redirect(redirs);
router.beforeEach(authHook);
router.start(Main, '#app');
