import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
    text:'默认值'
}

const getters = {
    getText(state) {
        return state.text
    }
}

const mutations = {
    setText(state, text) {
        state.text = text
    }
}

const actions = {
    setText ({ commit }, text) {
        return commit('setText', text)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})