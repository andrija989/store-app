<template>
     <form @submit.prevent="handleAdd">
    <div>
      <label for="fullName">Full Name</label>
      <input type="text" id="fullName" v-model="newContact.fullName" required>
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model="newContact.email" required>
    </div>
    
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            newContact: {
                fullName:'',
                email:'',
                products:[]
            },
        }
    },
    methods: {
        handleAdd() {
            this.$emit('add-contact', this.newContact)
            this.newContact = {
                fullName:'',
                email:'',
                products:[]
            }
        }
    }
}
</script>

<style>

</style>
