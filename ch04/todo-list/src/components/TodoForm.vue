<template>
  <q-form @submit.prevent="onSubmit"
        @reset="onReset"
        class="q-gutter-md">
      
        <q-input
          filled
          v-model="todo"
          label="Type your list *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
  
        <div>
          <q-btn label="ADD" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  </template>
    <script>
    
    import { defineComponent } from 'vue'
    import { useTodoListStore } from "src/stores/todolist"
    
    export default defineComponent({
      name: 'TodoForm',
      data(){
        return{
            todo: null,
            store: useTodoListStore()
        }
      },
      onSubmit(){
        if(this.todo.length == 0) return;
        this.store.addTodoList(this.todo);
        this.todo = "";
      },
      onReset(){
        this.todo = "";
      },
      methods:{
        onSubmit(){
          console.log("todo: " + this.todo);
          if(this.todo.length == 0 ) return;
          this.store.addTodoList(this.todo);
          this.todo = "";
        },
        onReset(){
          this.todo = "";
        }
      }
    })
    
    </script>