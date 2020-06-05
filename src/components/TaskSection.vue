<template>
  <div>
    <div class="mb-2">Tasks</div>
    <v-divider></v-divider>
    <div class="d-flex mt-5">
      <v-text-field
        solo
        placeholder="Search for tasks"
        append-icon="search"
        class="mr-3"
        hide-details
        flat
        dense
      ></v-text-field>
      <v-btn color="primary" depressed @click="taskDialog = true">
        <v-icon left>add</v-icon>
        New task
      </v-btn>
    </div>
    <v-expansion-panels v-model="panel" class="mt-5" multiple>
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @edit="taskDialog = true"
        @delete="deleteSnackbar = true"
      />
    </v-expansion-panels>

    <!-- Task Dialog -->
    <TaskDialog :taskDialog="taskDialog" @taskDialog="taskDialog = $event" />

    <!-- Delete Task -->
    <v-snackbar
      v-model="deleteSnackbar"
      top
      right
      :timeout="0"
      light
      color="white"
      class="black--text"
    >
      Are you sure you want to delete this task?
      <v-btn small text color="primary">Yes</v-btn>
      <v-btn small text color="primary" @click="deleteSnackbar = false"
        >No</v-btn
      >
    </v-snackbar>
  </div>
</template>
<script>
import Task from '@/components/Task';
import TaskDialog from '@/components/TaskDialog';

export default {
  name: 'TaskSection',
  components: {
    Task,
    TaskDialog,
  },

  data: () => ({
    panel: [],
    taskDialog: false,
    deleteSnackbar: false,
  }),

  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },

  mounted() {
    this.fetchTaskList();
  },

  methods: {
    fetchTaskList() {
      this.$store.dispatch('fetchTaskList');
    },
  },
};
</script>
<style lang="scss">
.v-tabs-items {
  background-color: transparent !important;
}
</style>
