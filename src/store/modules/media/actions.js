import { HTTP } from '../../../axios/http-common';

export default {
  async createMedia (context, payload) {
    try {
      const response = await HTTP.post('media.json',{
        name: payload.name,
        desc: payload.desc
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
    
  },
  async loadMedia (context) {
    try {
      const response = await HTTP.get('media.json');

      console.log(response);

      const media = [];

      for (const key in response.data) {
        const item = {
          id: key,
          name: response.data[key].name,
          desc: response.data[key].desc,
        };
        media.push(item);
        //this.media = media
        context.commit('setMedia', media);
      }

    } catch (err) {
      console.error(err);
    }
  }
}