const state = {
    weather: {},
    city: {},
    requestSent: false,
    error: {}
};

const actions = {};

const mutations = {
    setWeather(state, payload) {
        state.weather = payload;
    },
    setCity(state, payload) {
        state.city = payload;
    },
    toggleRequest(state, payload) {
        state.requestSent = payload ? payload : !state.requestSent;
    },
    setError(state, payload) {
        state.error = payload;
    }
};

const weather = {
    namespaced: true,
    state,
    actions,
    mutations,
};

export default weather;
