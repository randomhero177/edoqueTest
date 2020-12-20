import Vue from 'vue';
import Vuex from 'vuex';

import weather from '@/store/modules/weather';

Vue.use(Vuex);


const state = {};

const getters = {};

const mutations = {};

const actions = {};

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    actions,
    mutations,
    getters,
    modules: {
        weather
    },
});

export default store;
