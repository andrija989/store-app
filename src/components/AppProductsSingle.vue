<template>
    <div>
        {{ product.name }} - {{ product.quantity}}
        <select id='customerSelect'>
            <option v-for='(customer,index) in customers' :key="index">
                {{ customer.fullName}} 
            </option>
        </select>
        <button @click="handleConfirm(customer,product)">Confirm</button>
        <button @click="handleCancel">Cancel</button>
    </div>
    
</template>

<script>
import {productService} from '@/services/ProductsService'
import {customerService} from '@/services/CustomerService'

export default {
    computed: {
    product () {
      //return this.contacts.find(contact => {
       // return contact.id == this.$route.params.id
      //})
      return productService.find(this.$route.params.id)
    }
  },

  data() {
      return {
          customers: customerService.list()
      }
  },

  methods: {
      handleConfirm(customer,product) {
          return customerService.addProductToCustomer(customer,product)
          console.log(customer)
      },
      handleCancel() {
          
      }
  }
}
</script>

<style>

</style>
