<template>
<<<<<<< HEAD
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <todo-list></todo-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TodoList,
  }
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';
  * {
  box-sizing: border-box;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
>>>>>>> beb142f81efcbaa429fbede7c0d0a601beed706c
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
<<<<<<< HEAD
  margin-top: 60px;
  font-size: 24px;
}
.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
=======
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
>>>>>>> beb142f81efcbaa429fbede7c0d0a601beed706c
}
</style>
