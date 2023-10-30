<template>

<h6>To do List</h6>
<TodoForm></TodoForm>
<TodoList></TodoList>

</template>
<script>

import { defineComponent } from 'vue';
import  TodoForm  from './TodoForm.vue';
import  TodoList  from './TodoList.vue';

export default defineComponent({
    name: 'TodoApp',
    components: { TodoForm, TodoList }
})

</script>