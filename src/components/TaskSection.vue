<template>
  <div>
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
        <v-btn color="primary" depressed>
          <v-icon left>add</v-icon>
          New task
        </v-btn>
      </div>
      <v-expansion-panels v-model="panel" class="mt-5" multiple>
        <Task />
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
import Task from '@/components/Task';

export default {
  name: 'TaskSection',
  components: {
    Task,
  },
  data: () => ({
    panel: [0],
  }),
};
</script>
<style lang="scss">
.v-tabs-items {
  background-color: transparent !important;
}
</style>
