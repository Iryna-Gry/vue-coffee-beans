<template>
  <SharedHeader />
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import SharedHeader from './components/Header/SharedHeader.vue';

export default {
  name: 'App',
  components: {
    SharedHeader
  }
}
</script>

<style>
@import './css/reset.css';
@import './css/variables.css';
@import './css/base.css';

#app {
  font-family: Playfair Display, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white-color);
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  box-sizing: border-box;
  line-height: 1.357;

}
</style>
