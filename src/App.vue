<template>
  <div id="app">
    <!-- 라우팅 링크 -->
    <!-- <router-link to="foo">foo </router-link>
    <router-link to="bar">bar </router-link> -->
    <!-- 컴포넌트가 라우팅 되는 위치  -->
    <LayoutBox>
       <router-view></router-view>
    </LayoutBox>
    
  </div>
</template>

<script>
import LayoutBox from './components/LayoutBox.vue'

export default {
  name: 'App',
  components: {
    LayoutBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
