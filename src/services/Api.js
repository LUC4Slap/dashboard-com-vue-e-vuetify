import axios from 'axios';
let url = 'http://localhost:8686/';

const Api = {
  selectAll: async () => {
    let { data } = await axios.get(url)
    return data;
  }
}

export default Api;