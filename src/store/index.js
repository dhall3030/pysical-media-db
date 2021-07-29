import { createStore } from 'vuex'
import authModule from './modules/auth/index.js';
import mediaModule from './modules/media/index.js';

export default createStore({
  modules: {
    auth: authModule,
    media: mediaModule
  }
})
