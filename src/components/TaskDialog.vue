<template>
  <v-dialog v-model="taskDialog" max-width="50%">
    <v-card>
      <v-card-title>Task</v-card-title>
      <v-card-text>
        <!-- Task Form -->
        <v-form ref="form">
          <v-text-field
            outlined
            label="Title"
            dense
            v-model="model.title"
            required
            :rules="rules"
          ></v-text-field>
          <v-textarea
            outlined
            label="Description"
            dense
            v-model="model.description"
          ></v-textarea>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="model.date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="model.date"
                label="Date"
                readonly
                outlined
                dense
                required
                :rules="rules"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="model.date"
              color="primary"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(model.date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-2" @click="closeDialog">Cancel</v-btn>
        <v-btn depressed color="primary" @click="saveTask">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default() {
        return {};
      },
    },

    taskDialog: {
      type: Boolean,
      default: false,
    },

    action: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    menu: false,
    model: {
      id: null,
      title: null,
      description: null,
      date: null,
    },
    rules: [(v) => !!v || 'Required'],
  }),

  watch: {
    task: {
      handler() {
        this.model = {
          id: this.task.id,
          title: this.task.title,
          description: this.task.description,
          date: this.task.date,
        };
      },
    },
  },

  methods: {
    saveTask() {
      if (this.$refs.form.validate()) {
        if (this.action === 'add') this.addTask();
        else this.updateTask();
      }
    },

    addTask() {
      this.$store.dispatch('addTask', this.model).then((res) => {
        this.$store.dispatch('fetchTasks');
        this.closeDialog();
      });
    },

    updateTask() {
      this.$store.dispatch('updateTask', this.model).then((res) => {
        this.$store.dispatch('fetchTasks');
        this.closeDialog();
      });
    },

    closeDialog() {
      this.$refs.form.reset();
      this.$emit('taskDialog', false);
    },
  },
};
</script>
