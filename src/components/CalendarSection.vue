<template>
  <div>
    <v-card class="mb-5">
      <v-card-text>
        <div class="body-2 font-weight-medium mb-3">Hi, Geraldine!</div>
        <div class="caption">
          You have
          <span class="accent--text">{{ `${activeTasksCount} tasks` }}</span>
          left for today. You have already completed
          <span class="primary--text">{{ `${doneTasksCount} tasks` }}</span>
          today.
        </div>
      </v-card-text>
    </v-card>
    <v-date-picker
      v-model="date"
      width="100%"
      color="primary"
      @change="$store.dispatch('fetchTaskList', date)"
    ></v-date-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data: () => ({
    date: null,
  }),

  created() {
    this.date = moment().format('YYYY-MM-DD');
    this.$store.commit('setDate', this.date);
  },

  computed: {
    activeTasksCount() {
      return this.$store.getters['activeTasksCount'];
    },

    doneTasksCount() {
      return this.$store.getters['doneTasksCount'];
    },
  },

  watch: {
    date: {
      immediate: true,
      handler() {
        this.$store.commit('setDate', this.date);
      },
    },
  },
};
</script>
