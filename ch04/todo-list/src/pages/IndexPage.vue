<template>
  <q-page padding>
    <TodoApp></TodoApp>
  </q-page>
</template>

<script>
import TodoApp from 'src/components/TodoApp.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IndexPage',
    components: { TodoApp }
})
</script>
