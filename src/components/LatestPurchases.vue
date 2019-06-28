<template>
    <div>
        {{contact.fullName}} - {{contact.products}}
    </div>
</template>

<script>
import {customerService} from '@/services/CustomerService'

export default {
    computed: {
    contact () {
      //return this.contacts.find(contact => {
       // return contact.id == this.$route.params.id
      //})
      return customerService.find(this.$route.params.id)
    }
  },
}
</script>

<style>

</style>
