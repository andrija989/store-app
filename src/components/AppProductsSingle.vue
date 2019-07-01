<template>
    <div>
        {{ product.name }} - {{ product.quantity}}
        <select id='customerSelect' v-model="selectedCustomer">
            <option  v-for='(customer,index) in customers' :key="index" :value="customer">
                {{ customer.fullName}} 
            </option>
        </select>
        <button @click="handleConfirm(selectedCustomer,product)">Confirm</button>
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
          customers: customerService.list(),
          selectedCustomer: {}
      }
  },

  methods: {
      handleConfirm(selectedCustomer,product) {
          console.log(this.selectedCustomer.id)
          productService.decrement(product)
          return customerService.addProductToCustomer(this.selectedCustomer,product.name)
          
      },
      handleCancel() {
          
      }
  }
}
</script>

<style>

</style>
