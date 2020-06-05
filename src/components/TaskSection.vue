<template>
  <div>
    <v-tabs right background-color="transparent">
      <v-tab>Active</v-tab>
      <v-tab>Completed</v-tab>

      <v-tab-item class="mt-5">
        <div class="d-flex">
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
      </v-tab-item>
      <v-tab-item class="mt-5">Completed Tasks</v-tab-item>
    </v-tabs>
  </div>
</template>
<style lang="scss">
.v-tabs-items {
  background-color: transparent !important;
}
</style>
