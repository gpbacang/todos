import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL =
  'https://api.fake.rest/788438df-ac8a-4f54-b27e-2770036764e5';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },

  actions: {
    fetchTaskList({ commit }) {
      axios
        .get(`task/list`)
        .then((res) => {
          commit('setTasks', res.data.data);
        })
        .catch((err) => {
          throw err;
        });
    },
  },

  modules: {},
});
