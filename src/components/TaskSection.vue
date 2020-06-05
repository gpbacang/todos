<template>
  <div>
    <div class="mb-2">Tasks</div>
    <v-divider></v-divider>
    <v-expansion-panels
      v-model="panel"
      class="mt-5"
      multiple
      v-if="tasks.length > 0"
    >
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @edit="onEditTask(task)"
        @delete="onDeleteTask(task)"
      />
    </v-expansion-panels>
    <div v-else class="text-center pa-5">
      You don't have any tasks for this day.
    </div>

    <!-- Add Task Button -->
    <v-btn
      absolute
      dark
      fab
      bottom
      right
      fixed
      color="primary"
      style="bottom:20px;"
      @click="
        taskDialog = true;
        action = 'add';
      "
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <!-- Add/Edit Task Dialog -->
    <TaskDialog
      :taskDialog="taskDialog"
      :action="action"
      :task="selectedTask"
      @taskDialog="
        taskDialog = $event;
        selectedTask = {};
      "
    />

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
      <v-btn
        small
        text
        color="primary"
        @click="
          $store.commit('deleteTask', selectedTask);
          deleteSnackbar = false;
          selectedTask = {};
        "
        >Yes</v-btn
      >
      <v-btn
        small
        text
        color="primary"
        @click="
          deleteSnackbar = false;
          selectedTask = {};
        "
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
    action: 'Add',
    selectedTask: {},
  }),

  computed: {
    date() {
      return this.$store.state.date;
    },

    tasks() {
      return this.$store.getters['getTasks'];
    },
  },

  methods: {
    onEditTask(task) {
      this.selectedTask = task;
      this.taskDialog = true;
      this.action = 'edit';
    },

    onDeleteTask(task) {
      this.selectedTask = task;
      this.deleteSnackbar = true;
    },
  },
};
</script>
<style lang="scss">
.v-tabs-items {
  background-color: transparent !important;
}
</style>
