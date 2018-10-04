<template>
  <div id="todoApp">
  <h2> {{message}} </h2>
  <p>
  New Tasks can be added below:
  </p>
  <form name="todo-form" method="post" action="" v-on:submit.prevent="addTask">
    <input name="add-todo" type="text" v-model="addTodoInput" v-bind:class="{error: hasError}"/>
    <button type="submit">Add</button>
  </form>
   <div class="todo-lists" v-if="lists.length"><br />
    <h3>My Todo Tasks:</h3>
    <ul>
      <li v-for="list in lists" :key="list.id">
        <input type="checkbox" v-on:change="completeTask(list)" v-bind:checked="list.isComplete"/>
        <del v-if="list.isComplete">
        {{list.title}}
        </del>
         <span v-else class="title" contenteditable="true" v-on:keydown.enter="updateTask($event, list)" v-on:blur="updateTask($event, list)" v-bind:class="{completed: list.isComplete}">{{list.title}}</span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld'
  props: {
    message: 'Welcome to Todo App',
    addTodoInput: '',
    lists: [],
    hasError: false
  },
  methods:{
    addTask(){
      
      if(!this.addTodoInput){
        this.hasError = true;
        return;
      }
      
      this.hasError = false;
      
      this.lists.push({
        id:this.lists.length+1, 
        title: this.addTodoInput, 
        isComplete: false
      });
      
      this.addTodoInput = '';
    },
    
    updateTask(e, list){
      e.preventDefault();
      list.title = e.target.innerText;
      e.target.blur();
    },
    
    completeTask(list){
      list.isComplete = !list.isComplete;
    }
    
  }
});

//generate dummy data for demo purpose
todoApp.lists = [{
      id: 1,
      title: 'Hello Vue.JS',
      isComplete: false
    },
    {
      id: 2,
      title: 'Learn JavaScript',
      isComplete: false
    },
    {
      id: 3,
      title: 'Learn Vue',
      isComplete: false
    },
    {
      id: 4,
      title: 'Play around in JSFiddle',
      isComplete: true
    }]
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #000;
  ;
  padding: 20px;
  font-family: Helvetica;
}

#todoApp {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>
