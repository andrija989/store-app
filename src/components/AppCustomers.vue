<template>
<div>
  <ul>
    <li v-for='(contact,index) in contacts' :key="index">
      {{ contact.fullName}} - {{ contact.email}}
      <router-link :to="latestPurchases(contact)">Products </router-link>
      <button @click="handleRemove(contact)">Remove</button>      
    </li>
  </ul>
  <form @submit.prevent="handleAdd(newContact)">
    <div>
      <label for="fullName">Full Name</label>
      <input type="text" id="fullName" v-model="newContact.fullName" required>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="newContact.email" required>
    </div>
    
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</div>
</template>


<script>

import {customerService} from '@/services/CustomerService'
export default {
    data () {
    return {
      contacts: customerService.list(),
      newContact: {
                id: '',
                fullName:'',
                email:'',
                products:[]
            },
    }
  },
  
  methods: {
      handleRemove(contact) {
          customerService.remove(contact)
      },

      handleAdd (newContact) {
        customerService.add(newContact)
        
            this.newContact = {
                id: '',
                fullName:'',
                email:'',
                products:[]
            }
        
      
        },
    latestPurchases(contact) {
        return `/customers/${contact.id}`
        }

  }
}
</script>
    
<style>

</style>
