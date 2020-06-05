<template>
  <div class="home pa-5">
    <v-layout wrap>
      <v-flex xs12 sm4 md4 lg3 xl3 class="pa-5">
        <CalendarSection />
      </v-flex>
      <v-flex xs12 sm12 md8 lg9 xl9 class="pa-5">
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
