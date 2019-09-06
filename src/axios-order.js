import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-new.firebaseio.com/',
});

export default instance;