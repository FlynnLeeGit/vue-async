<template>
  <div id="app">
    <h1>Please Open Console</h1>
    <div>
      <button @click='getTodos'>getTodos</button>
      <button @click='getTodosPromise'>getTodosPromise</button>
      <button @click='onGetResp'>onGetResp see in console</button>
      <button @click="postTodo">postTodo Handler Error</button>
      <button @click='acceptArgs(333)'>acceptArgs</button>
      <button @click='onTodosStream'>getTodosStream</button>
      <button @click='list = []'>clearList</button>
    </div>
    <div>getTodos$loading {{getTodos$loading}}</div>
    <div>getTodosPromise$loading {{getTodosPromise$loading}}</div>
    <div>postTodo$loading {{postTodo$loading}}</div>
    <div>acceptArgs$loading {{acceptArgs$loading}}</div>
    <div>getTodosStream$loading {{getTodosStream$loading}}</div>
    <ul>
      <li v-for='item in list'
        :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import todos from "./mock/todos.json";
import { ajax } from "rxjs/ajax";
import { tap, pluck } from "rxjs/operators";

const getTodos = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });

const postTodo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ code: 333, message: "assign error", data: [] });
    }, 500);
  });

const getTodosStream = () =>
  ajax.getJSON("https://jsonplaceholder.typicode.com/todos");
  
const postTodoStream = data =>
  ajax.post("https://jsonplaceholder.typicode.com/todos", data);

export default {
  name: "app",
  data() {
    return {
      list: []
    };
  },
  methods: {
    onGetResp() {
      this.getTodosPromise().then(todos => {
        console.log("returned res here", todos);
      });
    },
    onTodosStream() {
      this.getTodosStream().subscribe();
    }
  },
  async: {
    // autoLoad
    getTodos() {
      return getTodos().then(todos => {
        this.list = todos;
      });
    },
    getTodosPromise() {
      return getTodos().then(todos => {
        this.list = todos;
        return todos;
      });
    },
    postTodo() {
      return postTodo();
    },
    acceptArgs(id) {
      console.log(id);
      // return getTodos(id)
    },
    getTodosStream() {
      return getTodosStream().pipe(
        tap(list => {
          console.log(list);
          this.list = list;
        })
      );
    },
    postTodoStream() {
      return postTodoStream().pipe(
        tap(res => {
          console.log(res);
          // this.list = list;
        })
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
