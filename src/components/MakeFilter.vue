<template>
      <div style="padding: 4px; width: 200px;">
      <div style="font-weight: bold;">{{params.title }}</div>
      <div>
        <input style="margin: 4px 0 4px 0;" type="text" v-model="filterText" v-on:keyup="updateFilter($event)" placeholder="Full name search..."/>
      </div>
      </div>
  </template>
<script>

export default {
  data() {
    return {
      filterText: null,
    }
  },
  methods: {
    updateFilter() {
      console.log('data', this.filterText  )
      console.log('params', this.params  )
      console.log('props', this.props  )
      this.params.filterChangedCallback(this.filterText);
      this.$emit('filter-changed', this.filterText)

    },
    doesFilterPass(params) {
      return params.data.make.toLowerCase().includes(this.filterText.toLowerCase());
    },
    isFilterActive() {
      return this.filterText != null && this.filterText !== '';
    },
    getModel() {
      if (!this.isFilterActive()) {
        return null;
      }
      return { value: this.filterText };
    },
    setModel(model) {
      this.filterText = model == null ? null : model.value;
    }
  }
}
</script>
};