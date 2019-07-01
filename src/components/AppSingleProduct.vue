<template>
  <div>
    <router-link :to="routeToProduct">
      {{ product.name}} - {{ product.quantity}}
    </router-link>
    
  </div>
</template>

<script>
export default {
  props: ['product'],
  
  
  computed: {
    
    routeToProduct () {
      return `/products/${this.product.id}`
    }
  }
  
}
</script>
