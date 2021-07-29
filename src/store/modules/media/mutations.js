export default {
  createMedia(state, payload) {
    state.media.push(payload);
  },
  setMedia(state, payload) {
    state.media = payload;
  }
}