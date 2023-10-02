<template>
  <q-page padding>
    <div>{{ name }}</div>
    <div>My age is {{ age + 5 }}</div>
    <div>GPA is {{ GPA }}</div>
    <div>Addess <span v-html="address"></span></div>
    <ol>
      <li>{{ hobbies[0] }}</li>
      <li>{{ hobbies[1] }}</li>
      <li>{{ hobbies[2] }}</li>
    </ol>
    <ul>
      <li>{{ info.sex }}</li>
      <li>{{ info.weight }}</li>
      <li>{{ info.height }}</li>
    </ul>
    <div>Status: {{ getstatus() }}</div>
    <q-img
      :src="url"
      spinner-color="white"
      :ratio="18/9"
    />
    <div class="absolute-top text-center">
      This is Caption.
    </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return{
      name: "myName",
      age: 20,
      GPA: 2.25,
      address: "<i>Phuket</i>",
      hobbies: ["Running", "Badminton", "Tannis"],
      info: {
        sex: "not spacific",
        weight: 111,
        height: 222.3
      },
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/RedCat_8727.jpg"
    }
  },
  methods: {
    getstatus(){
      if(this.GPA >= 2.0) return this.addition(10)
      else return "Fail"
    },
    addition(pararm){
      return this.GPA + pararm
    }
  }
})
</script>
