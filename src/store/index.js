// Entry point for vuex where we cobine all different modules
import Vuex from 'vuex';
import Vue from 'vue';
import ToDos from './modules/todos';

// Loading Vuex
Vue.use(Vuex);

// Creating the store for having all components

export default new Vuex.Store({
    modules: {
        ToDos
    }
});