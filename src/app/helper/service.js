import http from './http';

export default {
  async get(url, params) {
    try {
      const res = await http.get(url, params);
      console.log("res", res);
      
      return res.data;
    }
    catch (error) {
      console.log("error", error);
      return error;
    }
  },

  async post(url, params) {
    try {
      const res = await http.post(url, params);
      console.log("res", res);
      return res.data;
    }
    catch (error) {
      console.log("error", error);
      return error;
    }
  },
};
