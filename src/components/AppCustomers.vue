<template>
<div>
  <ul>
    <li v-for='(contact,index) in contacts' :key="index">
      {{ contact.fullName}}
      <button @click="handleRemove(contact)">Remove</button>
    </li>
  </ul>
</div>
</template>


<script>

import {customerService} from '@/services/CustomerService'
export default {
    data () {
    return {
      contacts: customerService.list()
    }
  },
  
  methods: {
      handleRemove(contact) {
          this.$emit(customerService.remove())
      }
  }
}
</script>
    
<style>

</style>
