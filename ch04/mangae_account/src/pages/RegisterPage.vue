<template>
      <q-page class="flex flex-center">
        <q-card dark bordered class="bg-grey-4 my-card">
            <div class="flex flex-center">
                <q-icon name="account_circle" 
                color="green"
                size="4em"/>
            </div>
      <q-card-section>
        <q-form 
        @submit.prevent="onSubmit"
        @reset="onReset"
        class="q-gutter-md"/>

        <div>
            <q-input v-model="fullname" type="text" label="Your fullname"/>
        </div>
        <div>
            <q-input v-model="email" type="text" label="Your email"/>
        </div>
        <div>
            <q-input v-model="username" type="text" label="Your username"/>
        </div>
        <div>
            <q-input v-model="password" type="password" label="Your password"/>
        </div>
        <div>
         <q-file outlined v-model="model">
            <template v-slot:prepend>
                <q-icon name="attach_file" />
            </template>
        </q-file>
        </div>

        <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" flat class="q-ml-sm"/>
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
      </q-page>  
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'RegisterPage',
    data(){
        return{
            fullname: null,
            email: null,
            username: null,
            password: null
        }
    }
  })
  </script>
  