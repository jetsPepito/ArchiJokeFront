import axios from 'axios';

class HTTPClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path, headers = {}) {
    console.info('Performing GET: ' + path);
    return axios.get(this.baseURL + path, headers);
  }

  post(path, payload, headers = {}) {
    console.info('Performing POST: ' + path);
    return axios.post(this.baseURL + path, payload,
      {
          headers: {
            ...headers,
            "content-type": "application/x-www-form-urlencoded",
          }
      });
  }

  patch(path, payload, headers = {}) {
    console.info('Performing PATCH: ' + path);
    return axios.patch(this.baseURL + path, payload, headers);
  }

  put(path, payload, headers = {}) {
    console.info('Performing PUT: ' + path);
    return axios.put(this.baseURL + path, payload, headers);
  }

  delete(path, headers = {}) {
    console.info('Performing DELETE: ' + path);
    return axios.delete(this.baseURL + path, headers);
  }
}

const api = new HTTPClient('http://localhost:8000/');

export default api;
