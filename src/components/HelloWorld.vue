<template>
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



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
