<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="py-0 px-5">
      <v-checkbox v-model="task.isDone" @click.stop>
        <template v-slot:label>
          <div class="pl-3">
            <div>{{ task.title }}</div>
          </div>
        </template>
      </v-checkbox>
    </v-expansion-panel-header>
    <v-divider></v-divider>
    <v-expansion-panel-content>
      <v-card flat color="grey lighten-4">
        <v-card-text>{{ task.description }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions style="background-color:white;">
          <v-chip small>{{ task.date }}</v-chip>
          <v-spacer></v-spacer>
          <v-btn icon small color="primary" @click="$emit('edit')">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon small color="primary" @click="$emit('delete')">
            <v-icon>delete_outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
  },
  data: () => ({
    completed: false,
  }),
};
</script>
<style lang="scss">
.v-expansion-panel-content {
  &__wrap {
    padding: 0 !important;
  }
}
</style>
