<template>
  <v-dialog v-model="taskDialog" max-width="50%">
    <v-card>
      <v-card-title>Task</v-card-title>
      <v-card-text>
        <v-text-field outlined label="Title" dense></v-text-field>
        <v-textarea outlined label="Description" dense></v-textarea>
        <v-layout wrap>
          <v-flex class="pr-2">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Date"
                  readonly
                  outlined
                  dense
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex>
            <v-text-field
              outlined
              dense
              label="Time"
              placeholder="00:00"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-2" @click="$emit('taskDialog', false)"
          >Cancel</v-btn
        >
        <v-btn depressed color="primary">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    taskDialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: false,
    date: null,
  }),
};
</script>
