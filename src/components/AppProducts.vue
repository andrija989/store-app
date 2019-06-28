<template>
<div>
<ul>
    <li v-for='(product,index) in products' :key="index">
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
      
    }
  },
}
</script>

<style>

</style>
