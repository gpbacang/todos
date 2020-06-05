<template>
  <div>
    <v-card class="mb-5">
      <v-card-text>
        <div class="body-2 font-weight-medium mb-3">Hi, Geraldine!</div>
        <div class="caption">
          You have
          <span class="accent--text">{{ `${activeTasks} tasks` }}</span> left
          for today. You have already completed
          <span class="primary--text">{{ `${completedTasks} tasks` }}</span>
          today.
        </div>
      </v-card-text>
    </v-card>
    <v-date-picker
      v-model="picker"
      width="100%"
      color="primary"
    ></v-date-picker>
  </div>
</template>
<script>
export default {
  data: () => ({
    picker: null,
  }),

  computed: {
    activeTasks() {
      return this.$store.getters['getActiveTasks'];
    },

    completedTasks() {
      return this.$store.getters['getCompletedTasks'];
    },
  },
};
</script>
