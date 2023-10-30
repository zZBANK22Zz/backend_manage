<template>
  <div>
    <q-input color="blue" v-model="value1" label="Enter number"></q-input>
    {{ value1 }} x 2 = {{ result }}
  </div>
  <div>
    <q-input color="teal" filled 
    v-model="mysearch" label="Test Label">
        <template v-slot:prepend>
          <q-icon name="pets" />
        </template>
      </q-input>
  </div>
  <div class="listItem" v-for="result in getSearchResult" :key="result.id">{{ result.label }}</div>
  <div>
    Method Section
    <ul>
      <li v-for="val in 3" :key="val">{{ getRandomMethod() }}</li>
    </ul>
  </div>
  <div>
    Computed Section
    <ul>
      <li v-for="val in 3" :key="val">{{ getRandomComputed }}</li>
    </ul>
  </div>
  <q-page padding>
    <div>
    <q-option-group
      v-model="qOptionGroup"
      :options="qOptionObj"
      color="primary"
      type="toggle"
      />
    </div>
    <div>Select is {{ qOptionGroup }}</div>
    <div>
      <q-select rounded filled v-model="qSelect" :options="options" label="What platform you use the most" />
    </div>
    <div>Your Selection: {{ qSelect }}</div>
    <div>{{ name }}</div>
    <div>My age is {{ age + 5}}</div>
    <div>
      <q-btn color="primary" label="Increment" @click="age++"/>
      <q-btn color="amber" label="Decrement" @click="age--"/>
      <q-btn color="secondary" label="+10" @click="incremental(10)"/>
    </div>
    <div>
      <q-input rounded outlined v-model="text" label="Type here" @keyup.alt.enter="clearText"/>
    </div>
    <div>textbox: {{ text }}</div>
    <div>Gpa is {{ gpa }}</div>
    <div>Address: <span v-html="address"></span></div>
    <ol>
      <li v-for="(val, key) in hobbies" :key="key">{{ val }}</li>
    </ol>
    <ul v-if="showInfo">
      <li v-for="(val, property, index) in info" :key="index">{{ index }} {{ property }} {{ val  }}</li>

    </ul>
    <div v-else>No Information</div>
    <div>status: {{getstatus()}}</div>
    <q-img
      :src="url"
      spinner-color="white"
      :ratio="18/9"
    >
    <div class="absolute-top text-center">
            This is my Caption.
          </div>
    </q-img>
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
      gpa: 2.6,
      address: "<i>Phuket</i>",
      hobbies: ["Running", "Badmminton", "Tennis"],
      info: {
        sex: "prefer not to ans",
        weight: 69.7,
        height: 170.1
      },
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/RedCat_8727.jpg",
      showInfo: true,
      text: null,
      qSelect: null,
      options: ["Facebook","X","Intragram"],
      qOptionGroup: [],
      qOptionObj:[
        {label: "Milk Tea", value:"Milk Tea", color: "brown"},
        {label: "Beer", value:"Beer", color: "yellow"},
        {label: "Herb drink", value:"Herb drink", color: "green"},
      ],
      Herb: [
        {id: 1, label: "Ganja"},
        {id: 2, label: "Kratom"}
      ],
      mysearch: null,
      value1: null,
      result: 0
    }
  },
  methods: {
    getstatus(){
      if(this.gpa >= 2.0) return this.addition(3)
      else return "Fail"
    },
    addition(param){
      return this.gpa + param
    },
    incremental(param){
      this.age += param
    },
    clearText(){
      this.text = ""
    },
    getRandomMethod(){
      return Math.random()
    }
    
  },
  computed:{
    getRandomComputed(){
      return Math.random()
    },
    getSearchResult(){
      if(this.mysearch){
        return this.Herb.filter((item)=>{
          return item.label
          .toString()
          .toLowerCase()
          .includes(this.mysearch.toString().toLowerCase());
        });
      }else return this.Herb
    }
  },
  watch:{
    value1(){
      this.result = 2*this.value1;
    }
  }
  
})
</script>
<style scoped>
.listItem{
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: greenyellow;
}
</style>