import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: '1',
        title: 'Grocery',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et gravida tellus, rhoncus iaculis mi. In leo purus, mollis nec velit et, posuere mollis leo.',
        isDone: true,
        date: '2020-06-05',
      },
      {
        id: '2',
        title: 'Pay the bills',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et gravida tellus, rhoncus iaculis mi. In leo purus, mollis nec velit et, posuere mollis leo.',
        isDone: false,
        date: '2020-06-05',
      },
      {
        id: '2',
        title: 'Laundry',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et gravida tellus, rhoncus iaculis mi. In leo purus, mollis nec velit et, posuere mollis leo.',
        isDone: false,
        date: '2020-06-06',
      },
    ],
    date: moment().format('YYYY-MM-DD'),
    dateToday: moment().format('YYYY-MM-DD'),
  },

  getters: {
    activeTasksCount(state) {
      return state.tasks.filter(
        (task) => !task.isDone && task.date == state.dateToday
      ).length;
    },

    doneTasksCount(state) {
      return state.tasks.filter(
        (task) => task.isDone && task.date == state.dateToday
      ).length;
    },

    getTasks(state) {
      return state.tasks.filter((task) => task.date == state.date);
    },
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    setDate(state, date) {
      state.date = date;
    },

    newTask(state, task) {
      Vue.set(state.tasks, state.tasks.length, task);
    },

    editTask(state, task) {
      let taskIndex = state.tasks.findIndex((t) => t.id == task.id);
      if (taskIndex != -1) Vue.set(state.tasks, taskIndex, task);
    },

    deleteTask(state, task) {
      let taskIndex = state.tasks.findIndex((t) => t.id == task.id);
      if (taskIndex != -1) state.tasks.splice(taskIndex, 1);
    },
  },

  actions: {},

  modules: {},
});
