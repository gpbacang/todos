<template>
  <div class="home pa-5">
    <v-layout wrap>
      <v-flex md3 class="pa-5">
        <CalendarSection />
      </v-flex>
      <v-flex md9 class="pa-5">
        <TaskSection />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CalendarSection from '@/components/CalendarSection';
import TaskSection from '@/components/TaskSection';

export default {
  name: 'Home',
  components: {
    CalendarSection,
    TaskSection,
  },
};
</script>
