<template>
  <div class="media">
    <h1>Media List</h1>
    <router-link to="/create">Create new media</router-link>
    <div>
      <ul v-if="media">
        <li
          v-for="item in media"
          :key="item.id"
        >
          {{item.name}}
        </li>
      </ul>
    </div> 
  </div>
</template>

<script>

export default {
  data() {
    return {
      error: ''
    }
  },
  computed: {
    media() {
      return this.$store.getters['media/getMedia'];
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {

      try {
         await this.$store.dispatch('media/loadMedia')
      } catch(err) {
        console.log(err);
      }
      // try {
      //   const response = await HTTP.get('https://pysical-media-db-default-rtdb.firebaseio.com/media.json')

      //   console.log(response);

      //   const media = [];

      //   for (const key in response.data) {
      //     const item = {
      //       id: key,
      //       name: response.data[key].name,
      //       desc: response.data[key].desc,
      //     };

      //     media.push(item);

      //     this.media = media
      //   }

      // } catch (err) {
      //     console.error(err);
      // }
    }
  }
}
</script>