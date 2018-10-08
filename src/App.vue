<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <h2>My VUE.js ToDo Application</h2><br/>
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
body{
  background-color: #000;
}
h2{
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 35px;
  margin: 0 auto;
  text-align: center;
}
.container {
  max-width: 600px;
  margin: 5px auto;
  border: 25px solid rgb(37, 49, 223);
  border-radius: 50px;
    background-color: #fff;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
}
#app {
  font-family: "Comic Sans MS", cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
