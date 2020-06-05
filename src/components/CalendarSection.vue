<template>
  <div>
    <v-card class="mb-5">
      <v-card-text>
        <div class="body-2 font-weight-medium mb-3">Hi, Geraldine!</div>
        <div class="caption">
          You have <span class="accent--text">2 tasks</span> left for today. You
          have already completed
          <span class="primary--text">3 tasks</span> today.
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
};
</script>
