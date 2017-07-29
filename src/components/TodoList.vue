<template>
  <div class="container">
    <div class="field-warp">
      <field-list v-for="(list, index) in lists" 
      :key="index" 
      @update:title="value => list.title = value"
      @update:description="value => list.description = value"
      :title="list.title"
      :description="list.description"></field-list>
    </div>
    <pre>{{ lists }}</pre>
    <button type="button" class="btn-add" @click="addField">Add Field</button>
  </div>
</template>

<script>
import FieldList from './FieldList'

export default {

  components: {
    FieldList
  },

  data() {
    return {
      lists: [
        { title: '', description: '' }
      ]
    }
  },

  methods: {
    addField() {
      this.lists.push({ title: '', description: '' })
    }
  }
  
}
</script>

<style>
.container {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}
.field-warp {
  display: block;
}
.btn-add {
  margin-top: 30px;
}
</style>


