<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="py-0 px-5">
      <v-checkbox v-model="completed" @click.stop>
        <template v-slot:label>
          <div class="pl-3">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="caption grey--text">Work</div>
          </div>
        </template>
      </v-checkbox>
    </v-expansion-panel-header>
    <v-divider></v-divider>
    <v-expansion-panel-content>
      <v-card flat color="#E0F2F1">
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
          gravida tellus, rhoncus iaculis mi. In leo purus, mollis nec velit et,
          posuere mollis leo.</v-card-text
        >
        <v-divider></v-divider>
        <v-card-actions style="background-color:white;">
          <v-chip small class="mr-1">09:30</v-chip>
          <v-chip small>06.05.2020</v-chip>
          <v-spacer></v-spacer>
          <v-btn icon small color="primary">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon small color="primary">
            <v-icon>delete_outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
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
