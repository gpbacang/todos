import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash';
import moment from 'moment';
import axios from 'axios';

axios.defaults.baseURL =
  'https://api.fake.rest/788438df-ac8a-4f54-b27e-2770036764e5';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    date: moment().format('YYYY-MM-DD'),
  },

  getters: {
    activeTasksCount(state) {
      return state.tasks.filter((task) => !task.isDone).length;
    },

    doneTasksCount(state) {
      return state.tasks.filter((task) => task.isDone).length;
    },
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    setDate(state, date) {
      state.date = date;
    },
  },

  actions: {
    fetchTasks({ commit, state }) {
      axios
        .get(`task/list?date=${state.date}`)
        .then((res) => {
          commit('setTasks', res.data.data.data);
        })
        .catch((err) => {
          throw err;
        });
    },

    addTask({ commit }, task) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: `task/add`,
          headers: { 'content-type': 'application/json' },
          data: task,
        })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            throw err;
            reject(err);
          });
      });
    },

    updateTask({ commit }, task) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: `task/update?id=${task.id}`,
          headers: { 'content-type': 'application/json' },
          data: task,
        })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            throw err;
            reject(err);
          });
      });
    },

    deleteTask({ commit }, task) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: `task/delete?id=${task.id}`,
          headers: { 'content-type': 'application/json' },
          data: task,
        })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            throw err;
            reject(err);
          });
      });
    },
  },

  modules: {},
});
