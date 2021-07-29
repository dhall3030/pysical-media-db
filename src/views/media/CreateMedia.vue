<template>
  <div class="create">
    <h1>Create Media</h1>
    <create-form @create-media=createMedia></create-form>
  </div>
</template>

<script>
import CreateForm from '../../components/media/CreateForm.vue';

export default {
  components: {
    CreateForm
  },
  created(){
    this.makeUser();
  },
  methods: {
    async createMedia(media) {
      await this.$store.dispatch('media/createMedia', media);
      this.$router.replace('/media');
    },
    async makeUser() {
      const actionPayload = {
        email: 'dorian.hall@gmail.com',
        password: 'voltron1984',
      };
      await this.$store.dispatch('login', actionPayload);
    }
  }
}
</script>