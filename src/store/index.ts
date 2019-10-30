import Vue from 'vue';
import Vuex from 'vuex';
import looListModule from '@/store/modules/LooListModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    looListModule,
  },
});
