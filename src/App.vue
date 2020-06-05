<template>
  <v-app id="app">
    <v-app-bar app light dense elevation="1" color="white">
      <div class="primary--text">To Dos</div>
      <v-spacer></v-spacer>
      <div>
        <v-avatar size="25" class="mr-2 teal lighten-1">
          <span class="white--text">G</span>
        </v-avatar>
        <span class="caption">Geraldine Bacang</span>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
#app {
  background-color: #e0f2f1;
}
</style>
