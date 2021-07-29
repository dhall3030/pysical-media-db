export default {
  getMedia(state) {
    return state.media;
  },
  hasMedia(state) {
    return state.media && state.media.length > 0;
  },
  getMediaById: (state) => (id) => {
    return state.media.find(x => x.id === id)
  },
}
