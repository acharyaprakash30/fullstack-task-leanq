// api.js
import Axios from 'axios'
let urls = {
    production: '#',
    development: 'https://fakestoreapi.com/',
}

const Http = Axios.create({
    baseURL: urls.development,
})

export default Http
