<template>
    <q-page padding>
    <div>
      <h5>This is Page2</h5>
    </div>
    <div>
      <a href="/count1">Page1</a> |
      <a href="/count2">Page2</a>
    </div>
    <div>
      <h2>{{ mystores.counter }}</h2>
      <q-btn color="primary" icon="add" @click="mystores.increment"></q-btn>
      <h4>{{ mystores.counter }} x 2 = {{ mystores.doubleCount }}</h4>
    </div>
  </q-page>
    
</template>
<script>
import { defineComponent } from 'vue';
import { useCounterStore } from '../stores/counter';
export default defineComponent({
    name: "PiniaPage2",
    data(){
        return{
            mystores: useCounterStore(),
        }
    }
})
</script>