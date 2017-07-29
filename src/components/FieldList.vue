<template>
  <div>
	  <input type="text" :value="title" placeholder="Title" @input="updateValue($event.target.value, 'title')">
	  <input type="text" :value="description" placeholder="Description" @input="updateValue($event.target.value, 'description')">
  </div>
</template>

<script>
export default {

  props: ['title', 'description'],
  
  methods: {
    updateValue(value, type) {
    	if (type === 'title') {
    		this.$emit('update:title', value)
    		return
    	}
    	this.$emit('update:description', value)
    }
  }

}
</script>
