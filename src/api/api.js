import axios from 'axios';

class HTTPClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path, headers = {}) {
    console.info('Performing GET: ' + path);
    return axios.get(this.baseURL + path, headers)
    .catch(err => console.error("Error while performing GET : " + err));
  }

  post(path, payload, headers = {}) {
    console.info('Performing POST: ' + path);
    return axios.post(this.baseURL + path, payload,
      {
          headers: {
            ...headers,
            "content-type": "application/x-www-form-urlencoded",
          }
      })
      .catch(err => console.error("Error while performing POST : " + err));
  }

  patch(path, payload, headers = {}) {
    console.info('Performing PATCH: ' + path);
    return axios
      .patch(this.baseURL + path, payload, headers)
      .catch(err => console.error("Error while performing Patch : " + err));
  }

  put(path, payload, headers = {}) {
    console.info('Performing PUT: ' + path);
    return axios
      .put(this.baseURL + path, payload, headers)
      .catch(err => console.error("Error while performing PUT : " + err));
  }

  delete(path, headers = {}) {
    console.info('Performing DELETE: ' + path);
    return axios
      .delete(this.baseURL + path, headers)
      .catch(err => console.error("Error while performing DELETE : " + err));
  }
}

const url = "http://" + process.env.REACT_APP_BACK_URL + "/"
const api = new HTTPClient(url);

export default api;
