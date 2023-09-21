// api.js
import Axios from 'axios';
let urls = {
  production: `#`,
  development: 'http://localhost:4000/',
};
const baseUrl = process.env.NODE_ENV === 'development' ? urls.development : urls.production;

const Http = Axios.create({
  baseURL: baseUrl,
});

export default Http;
