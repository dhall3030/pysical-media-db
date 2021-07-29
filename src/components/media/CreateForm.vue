<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="name"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <base-button>Submit</base-button>
  </form>
</template>

<script>

export default {
  emits: ['create-media'],
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        desc: this.description
      };

      this.$emit('create-media', formData);
    }
  }
}
</script>