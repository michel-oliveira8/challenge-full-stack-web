<template>
  <v-app>
    <router-view>
      <StudentsView/>
    </router-view>
  </v-app>
</template>

<script>
import StudentsView from './views/StudentsView.vue';

export default {
  name: 'App',

  components: {
    StudentsView,
  },
};
</script>
