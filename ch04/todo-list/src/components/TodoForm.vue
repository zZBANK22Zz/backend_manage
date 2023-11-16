<template>
  <div v-if="store.todoList.length > 0" class="q-pt-md">
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="todo in store.todoList" :key="todo.id">
      <q-item-section :class="{ completedClass: todo.completed }">{{ todo.item }}</q-item-section>
      <q-item-section avatar>
        <q-icon
        color="primary"
        name="check"
        @click.stop="store.toggleCompleted(todo.id)" />
  </q-item-section>
        <q-item-section avatar>
              <q-icon
              name="delete"
              color="primary"
            @click="store.deleteTodo(todo.id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
  <script>
  import { useTodoListStore } from "../stores/useTodoListStore";
  export default {
      name: "TodoList",
      data() {
        return { store: useTodoListStore() };
        },
      };
  </script>
  <style>
  .completedClass {
  text-decoration: line-through;
  }
  </style>