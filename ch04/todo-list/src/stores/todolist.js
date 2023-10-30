import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useTodoListStore = defineStore('todolist', {
  state: () => ({
    todolist: useStorage("todoList", []),
    id: useStorage("id", 0)
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    addTodoList(item){
      this.todolist.push({item, id: this.id++, complete: false})
    },
    deleteTodoList(item){
      this.todolist = this.todolist.filter((odject)=>{
        return object.id != itemID;
      });
    },
    toggleCompletedTodoList(itemID){
      const todo = this.todoList.find((result)=>{
        return result.id == itemID;
      });
      if(todo) todo.completed = !todo.completed;
    }
  }
})
