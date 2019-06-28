<template>
<div>
    <label for="term">Product filter</label>
    <input type="text" v-model="term" />
    <ul>
    <li v-for='(product,index) in filteredArray' :key="index">
      {{ product.name}} - {{ product.quantity}}
     
    </li>
  </ul>
  
    
</div>
</template>

<script>
import {productService} from '@/services/ProductsService'

export default {
    data () {
    return {
      products: productService.list(),
      term: ""
    }
  },
  computed: {
    filteredArray() {
        return this.products.filter(product => {
            return product.name.includes(this.term)
        })
    }    
  },
}
</script>

<style>

</style>
