// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
  var app = new Vue({
    el: '#todoApp',
    data: {
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
        title: "Hello Vue.JS",
        isComplete: false
      },
      {
        id: 2,
        title: "Learn JavaScript",
        isComplete: false
      },
      {
        id: 3,
        title: "Learn Vue",
        isComplete: false
      },
      {
        id: 4,
        title: "Play around in JSFiddle",
        isComplete: true
      }];
