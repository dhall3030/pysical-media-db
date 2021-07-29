import { HTTP } from '../../../axios/http-common';
export default {
  async login(context, payload) {
    try {
      const response = await HTTP.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.VUE_APP_API_KEY,{
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      console.log(response);

      context.commit('setUser', {
        token: response.data.idToken,
        userId: response.data.localId
      });

    } catch (err) {
      console.error(err);
    }
  },
  async signup(context, payload) {
    try {
      const response = await HTTP.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.VUE_APP_API_KEY,{
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      console.log(response);

      context.commit('setUser', {
        token: response.data.idToken,
        userId: response.data.localId
      });

    } catch (err) {
      console.error(err);
    }
  }
}