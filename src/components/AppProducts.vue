<template>
<div>
    <label for="term">Product filter</label>
    <input type="text" v-model="term" />
    <ul>
    <li v-for='(product,index) in filteredArray' :key="index">
      <AppSingleProduct
      :product = product
      />
        <button>Buy</button>
        <button @click = handleIncrement(product)>+</button>
        <button @click = handleDecrement(product)>-</button>
    </li>
  </ul>
  
    
</div>
</template>

<script>
import {productService} from '@/services/ProductsService'
import AppSingleProduct from '@/components/AppSingleProduct'

export default {
    components: {
      AppSingleProduct
    },

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

  methods: {
      handleIncrement(product) {
          productService.increment(product)
      },

      handleDecrement(product) {
          productService.decrement(product)
      }
  }
}
</script>

<style>

</style>
